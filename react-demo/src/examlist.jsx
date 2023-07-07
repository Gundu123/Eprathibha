import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExamsList = ({ serverKey, tokenu, id}) => {
  const [exams, setExams] = useState([]);
    
  useEffect(() => {
    
    const fetchExams = async () => {
      try {
        const response = await axios.post(
          'https://test.e-prathibha.com/apis/test_free_exam',
          {},
          { headers: { id, server_key: serverKey, tokenu } }
        );
        console.log('Response data:', response.data.data.exams);
        
        setExams(response.data.data.exams)
        
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };
    fetchExams();
  }, [id, serverKey, tokenu]);

  if (!Array.isArray(exams)) {
    return <div>No exams found.</div>;
  }

  return <div>
  {exams.map((qps,idx) => {
      const qpType = Object.keys(qps)[0];
      // console.log(qpType);
      return <div key={idx} id='paperType'>
          <h3>{qpType}</h3>
          {
              qps[qpType].map((paper, idx) => {
                  return <div key={idx} id="paper">
                      
                        <Link to="/examlist/:examid/question"><button>start exam</button></Link>
                         
                          {/* <Link to={`/examlist/${paper['Exam']['id']}/question`}><button>start exam</button></Link> */}

                      
                      
                  </div>
              })
          }
          
      </div>
  })}
    </div>;
};

export default ExamsList;
