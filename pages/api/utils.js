import axios from 'axios';

import { toast } from 'react-toastify';


export const sendDataToAirTable = async ({

 data,

 tableName = 'Leads',

 onComplete = () => {},

}) => {

 //  "Email": "sumit@neolen.com",

 // "Priority": "Low",

 // "Verified": true,

 // "First Name": "sumit",

 // "Last Name": "rathore",

 // "Phone": "(+91) 880090-4192"

 const records = {

   records: [

     {

       fields: {

         ...data,

         Priority: 'Low',

         Verified: true,

       },

     },

   ],

 };


 try {

   await axios.post(

     `https://api.airtable.com/v0/appcgJwAD98ss9uE2/Leads?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,

     records

   );

   
  toast.success('Request send! our team will get back to you.');

 } catch (error) {

   console.log(error.message);

 } finally {

   onComplete();

 }

};
