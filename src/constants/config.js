
import { BASE_URL } from "./server";
import axios from "axios";


export const getNodeData = async (url, requestData = {}, token = null ,headers=null) => {
  const apiUri = `${BASE_URL}${url}`;

//   if (token) {
//     axios.defaults.headers.common = {
//       Authorization: `Bearer ${token}`,
//     };
//   }

  console.log('API url..getNodeData..', apiUri);
  console.log('API Body..getNodeData..', requestData);
  console.log('API Headers..getNodeData..', headers);
//   console.log('API token..getNodeData..', token);

  try {
    const response =
      requestData != {} || headers !={}
        ? await axios.get(apiUri, {params: requestData,headers:headers})
        : await axios.get(apiUri);
    const statusCode = response.status;
    const responseJson = await response.data;
    // console.log("API response...res..", url, statusCode, responseJson);
    return {...responseJson, statusCode};
  } catch (error) {
    if (axios.isAxiosError(error)) {
            if (error.message === 'Network Error') {
              console.error('Network Error:', error);
              showToast('Network Error', 'Please check your internet connection.')
              return { error: 'Network Error. Please check your internet connection.' };
            }
  }
};
}




export const postNodeData = async (url, requestData=null, token = null,headers=null) => {
  const apiUri = `${BASE_URL}${url}`;

//   if (token) {
//     axios.defaults.headers.common = {
//       Authorization: `Bearer ${token}`,
//     };
//   }

  console.log('API url..postNodeData..???////', apiUri);
  console.log('API Body..postNodeData..????......?', requestData);
  console.log('API Headers..postNodeData..????......?', headers);
//   console.log('API token..postNodeData..????......?', token);

  try {
    const response = await axios.post(apiUri, requestData, {
      headers: headers
    });
    console.log("---response::::::::::",response);
    const statusCode = response.status;
    const responseJson = response.data;
    // console.log(url, statusCode, responseJson);
    return {...responseJson, statusCode};
  } catch (error) {
    console.log(error);
    return error.response ? error.response.data : error;
  }
};



export const getData = async (url, requestData = {}, token = null) => {
  
  const apiUri = `${BASE_URL}${url}`;
//   if (token) {
//     axios.defaults.headers.common = {
//       Authorization: Bearer ${token},
//     };
//   }

  console.log('API url..getData..', apiUri);
  console.log('API Body..getData..', requestData);
  console.log('API token..getData..', token);

  try {
    const response =
      requestData != {}
        ? await axios.get(apiUri, {params: requestData})
        : await axios.get(apiUri);
    // console.log("API response",response);
    const statusCode = response.status;
    const responseJson = await response.data;
    console.log("API response", url, statusCode, responseJson);
    return {...responseJson, statusCode};
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};