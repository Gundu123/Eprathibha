// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const ApiCall = ({ serverKey, tokenu, id,phone, enrollment_no, address, altenatephone}) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const Submit=(e)=>{
//     setData(e.target.value)
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           'http://test.e-prathibha.com/apis/edit_profile',
//           {id,serverKey,tokenu,phone, enrollment_no, address, altenatephone},
//           { headers: { id, server_key: serverKey, tokenu } }
//         );
//         console.log('Response data:', response.data);
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id, serverKey, tokenu,phone, enrollment_no, address, altenatephone]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div>
//   {JSON.stringify(data)}
//   <input type="text" value={data}
//   onChange={Submit}>
//   </div>
//   );
// };

// export default ApiCall;
import React, { useState,} from 'react';
import axios from 'axios';

const ApiCall = ({ serverKey, tokenu, id, phone, enrollment_no, address, alternatephone ,name,email}) => {
  const [data, setData] = useState(null);
  //const [error, setError] = useState(null);
 // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         'http://test.e-prathibha.com/apis/edit_profile',
  //         { id, serverKey, tokenu, phone, enrollment_no, address, alternatephone,name,email },
  //         { headers: { id, server_key: serverKey, tokenu } }
  //       );
  //       console.log('Response data:', response.data);
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [id, serverKey, tokenu, phone, enrollment_no, address, alternatephone,name,email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://test.e-prathibha.com/apis/edit_profile',
        {
          id,
          serverKey,
          tokenu,
          phone: e.target.phone.value,
          enrollment_no: e.target.enrollment_no.value,
          address: e.target.address.value,
          alternatephone: e.target.alternatephone.value,
          name:e.target.name.value,
          email:e.target.email.value
        },
        { headers: { id, server_key: serverKey, tokenu } }
      );
      console.log('Response data:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      //setError(error);
    }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" name="name"  defaultValue={name}/><br/>
        <label>email:</label>
        <input type="text" name="email" defaultValue={email}/><br/>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" defaultValue={phone} />
        <br />
        <label htmlFor="enrollment_no">Enrollment No:</label>
        <input type="text" name="enrollment_no" defaultValue={enrollment_no} />
        <br />
        <label htmlFor="address">Address:</label>
        <input type="text" name="address" defaultValue={address} />
        <br />
        <label htmlFor="alternatephone">Alternate Phone:</label>
        <input type="text" name="alternatephone" defaultValue={alternatephone} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default ApiCall;
