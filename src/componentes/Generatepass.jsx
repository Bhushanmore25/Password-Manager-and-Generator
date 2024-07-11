import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generatepass = () => {
  const [val, setVal] = useState("");
  const [lengths, setlengths] = useState(8);
  const generatePassword=()=>{
    const lowerCaseCheckBox = document.getElementById('lowerCase').checked;
    const upperCaseCheckBox = document.getElementById('upperCase').checked;
    const numbersCheckBox = document.getElementById('numbers').checked;
    const specialCharsCheckBox = document.getElementById('specialChars').checked;
    const length = document.getElementById('length').value;
    const passwordField = document.getElementById('password');

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";
    if (lowerCaseCheckBox) characters += lowerCase;
    if (upperCaseCheckBox) characters += upperCase;
    if (numbersCheckBox) characters += numbers;
    if (specialCharsCheckBox) characters += specialChars;

    if (characters === "") {
        alert("Please Select at Least one Character type");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // passwordField.value = password;
    setVal(password)
  }
  const copyText=(text)=>{
    navigator.clipboard.writeText(text);
    toast('Password Copied!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const setlen=(e)=>{
  setlengths(e.target.value);
}
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition= "Bounce"/><ToastContainer />
        <div className='container w-screen mx-auto text-center'>
          <h1 className='text-3xl font-bold text-green-800 border-y-8 border-green-100 my-4 py-5 bg-slate-50'>Password Generator</h1>
          <div className='container w-96 mx-auto flex justify-center items-center flex-col gap-4 my-10'>
            <div className='flex flex-col items-start gap-4 bg-green-200 py-20 px-20 w-full rounded-lg shadow-lg shadow-green-700'>
              <label><input type="checkbox" id="lowerCase" checked/> Include LowerCase</label>
              <label><input type="checkbox" id="upperCase" /> Include UpperCase</label>
              <label><input type="checkbox" id="numbers" checked/> Include Numbers</label>
              <label><input type="checkbox" id="specialChars"/> Include Special Characters</label>
              <label className='w-full' for="length">Password Length<span className='font-bold'> :-</span></label><input type="text" id="length" value={lengths} onChange={setlen} className='border border-green-500 rounded-lg w-full text-center py-1 shadow-md shadow-green-800' />
              <button id='generateButton' className='border border-green-900 w-full py-2 rounded-lg bg-green-600 shadow-md shadow-green-700'onClick={generatePassword}> Generate Button</button>
              <div className='w-full flex '>
                <input type="text" id='password' readOnly className='border min-h-10 border-green-500 rounded-lg w-full text-center py-1 shadow-md shadow-green-800 text-wrap'  value={val}/><div className='size-7 cursor-pointer' onClick={()=>{copyText(val)}}><lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" style={{"width":"25px","height":"25px","paddingTop":"4px","paddingLeft":"10px"}} trigger="hover"></lord-icon></div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Generatepass