import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    Email: '',
    name: '',
    age: '',
    college: '',
    us: '',
    title: '',
    canada: '',
    country: '',
    goal: '',
    score: '',
    read: '',
    speak: '',
    right: '',
    pay: '',
    last: '',
    gic: 'no', 
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    
    setFieldErrors({
      ...fieldErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit function called');
    
    
    const requiredFields = [
      'Email',
      'name',
      'age',
      'college',
      'us',
      'title',
      'canada',
      'country',
      'goal',
      'score',
      'read',
      'speak',
      'right',
      'pay',
      'last',
    ];
    const newFieldErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newFieldErrors[field] = 'This field is required.';
      }
    });

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      setSubmitMessage('');
      return; 
    }

    try {
      const response = await fetch('/api/storeFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Form Data to Send:', formData);
      console.log( response);
      if (response.ok) {
        setSubmitMessage('Form data sent successfully');

        setFormData({
          Email: '', 
          name: '',
          age: '',
          college: '',
          us: '',
          title: '',
          canada: '',
          country: '',
          goal: '',
          score: '',
          read: '',
          speak: '',
          right: '',
          pay: '',
          last: '',
          gic: 'no',
        });
      } else {
        console.error('Server returned an error:', response.status, response.statusText);
        setSubmitMessage('Error sending form data');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage ('An error occurred while sending the form data');
    }
  };

  return (
    <div className="back">
      <form onSubmit={handleSubmit}>
        <div className="head">
          <h1 class="h1">Customized SOP Generator</h1>
          <p>Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs.</p>
          <p>If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us: <a href="https://effizient-immigration-inc.square.site/s/shop"><u>https://effizient-immigration-inc.square.site/s/shop</u></a></p>
          <u></u><br></br>
          <hr></hr>
  <p class="para">dharavathbhavsingh5@gmail.com <span class="color">Switch Account</span></p>
          <hr></hr>
        </div>
        <div className="bhav">
          {submitMessage && <p>{submitMessage}</p>}
          <label>Email<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Enter email address"
            value={formData.Email}
            required
            onChange={handleInputChange}
            name="Email"
          />
          {fieldErrors.Email && <p className="error-text">{fieldErrors.Email}</p>}
        </div>
        <div className={`bhav ${fieldErrors.name ? 'error' : ''}`}>
          <label>FullName<span className="required">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your Answer"
          />
          {fieldErrors.name && <p className="error-text">{fieldErrors.name}</p>}
        </div>
        <div className="bhav">
          <label>Age<span className="required">*</span></label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Your Answer"
          />
        </div>
        <div className={`bhav ${fieldErrors.college ? 'error' : ''}`}>
          <label>Highest Level of Education<span className="required">*</span></label>
          <select
            name="college"
            value={formData.college}
            onChange={handleInputChange}
          >
            <option>Grade12</option>
            <option>Diploma</option>
            <option>Bachelors Degree</option>
            <option>Master Degree</option>
            <option>PhD</option>
          </select>
          {fieldErrors.college && (
            <p className="error-text">{fieldErrors.college}</p>
          )}
        </div>
        <div className="bhav">
          <label>Institute where you completed your highest level of education<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="us"
            value={formData.us}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="head">
          <label>Do you have any relevant work experience?<span className="required">*</span></label>
          <label>Write None if no work experience. Provide the following details if yes:</label>
          <ol>
            <li>Job title</li>
            <li>Company name</li>
            <li>Job duties</li>
          </ol>
          <p>Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets</p>
          <input
            type="text"
            placeholder="Your Answer"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>What institute did you get admitted to in Canada?<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="canada"
            value={formData.canada}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>Which country are you applying from?<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>What are your future goals?<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>English Scores - Listening</label>
          <input
            type="text"
            placeholder="Your Answer"
            name="score"
            value={formData.score}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>English Scores - Reading<span className="required">*</span></label><br></br>
          <input
            type="text"
            placeholder="Your Answer"
            name="read"
            value={formData.read}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>English Scores - Speaking<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="speak"
            value={formData.speak}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>English Scores - Writing<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="right"
            value={formData.right}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>Did you pay your first year tuition?<span className="required">*</span></label>
          <ul className="order">
            <li>
              <input
                type="radio"
                name="gic"
                value="yes"
                checked={formData.gic === 'yes'}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </li>
            <li>
              <input
                type="radio"
                name="gic"
                value="no"
                checked={formData.gic === 'no'}
                onChange={handleInputChange}
              />
              <span>No</span>
            </li>
          </ul>
        </div>
        <div className="bhav">
          <label>How much tuition fee did you pay?<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="pay"
            value={formData.pay}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="bhav">
          <label>Did you do a GIC?<span className="required">*</span></label>
          <ul className="order">
            <li>
              <input
                type="radio"
                name="last"
                value="yes"
                checked={formData.last === 'yes'}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </li>
            <li>
              <input
                type="radio"
                name="last"
                value="no"
                checked={formData.last === 'no'}
                onChange={handleInputChange}
              />
              <span>No</span>
            </li>
          </ul>
        </div>
        <div className={`bhav ${fieldErrors.last ? 'error' : ''}`}>
          <label>How much did you pay towards GIC?<span className="required">*</span></label>
          <input
            type="text"
            placeholder="Your Answer"
            name="last"
            value={formData.last}
            onChange={handleInputChange}
            required
          />
          {fieldErrors.last && <p className="error-text">{fieldErrors.last}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
          <p>Clear form</p>
        </div>
      </form>
      <p>Never submit passwords through Google Forms.</p>
      <p>
        This content is neither created nor endorsed by Google. Report Abuse -
        Terms of Service - Privacy Policy
      </p>
    </div>
  );
}

export default Form;
