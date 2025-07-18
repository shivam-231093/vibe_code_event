import React, { useState } from 'react';
import DropdownInputField from '../components/DropdownInputField';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const inputFieldList = [
  { type: "text", name: "teamsize", label: "Team Size", options: { required: true }, dropdown: true, values: ["Solo Rider", "Dynamic Duo"] },
  { type: "text", name: "teamName", label: "Team Name", options: { required: true } },
  { type: "text", name: "fullName", label: "Full Name", options: { required: true } },
  { type: "text", name: "phoneNum", label: "Phone Number", options: { required: true, patten: /^\d+$/, maxLength: 10 } },
  { type: "text", name: "emailId", label: "Email Address", options: { required: true, patten: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/ } },
  { type: "text", name: "branch", label: "Branch", options: { required: true }, dropdown: true, values: ["AI", "CE", "CS", "EE", "MT", "IP", "IT"] },
  { type: "text", name: "semester", label: "Semester", options: { required: true }, dropdown: true, values: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"] },
  { type: "text", name: "github", label: "Github" },
  { type: "text", name: "linkdin", label: "LinkedIn" },
];

const teamMateFields = [
  { type: "text", name: "teamMember", label: "Team Mate's Name", options: { required: true } },
  { type: "text", name: "teamPhoneNum", label: "Team Mate's Phone Number", options: { required: true, patten: /^\d+$/, maxLength: 10 } },
  { type: "text", name: "teamEmailId", label: "Team Mate's Email Address", options: { required: true, patten: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/ } },
  { type: "text", name: "teamBranch", label: "Team Mate's Branch", options: { required: true }, dropdown: true, values: ["AI", "CE", "CS", "EE", "MT", "IP", "IT"] },
  { type: "text", name: "teamSemester", label: "Team Mate's Semester", options: { required: true }, dropdown: true, values: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"] },
  { type: "text", name: "teamGithub", label: "Team Mate's Github" },
  { type: "text", name: "teamLinkdin", label: "Team Mate's LinkedIn" },
];

const InputField = ({ type, name, label, value, onChange, error, dropdown, values }) => (
  <div className='flex flex-col w-full  transition-all duration-300'>
    <div className='flex w-56 justify-between'>
      <label htmlFor={name} className='text-sm'>{label}</label>
      {!!error && <p className='text-sm text-red-600'>{error}</p>}
    </div>
    {dropdown
      ? <DropdownInputField value={value} setValue={onChange} options={values} />
      : <input
          type={type}
          className='bg-[#D4D4D4] text-black rounded-lg text-sm px-2 py-2'
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />}
  </div>
);

const Register = () => {
  const [formData, setFormData] = useState({
    teamsize: "",
    teamName: "",
    fullName: "",
    phoneNum: "",
    emailId: "",
    github: "",
    linkdin: "",
    branch: "",
    semester: "",
    teamMember: "",
    teamPhoneNum: "",
    teamEmailId: "",
    teamBranch: "",
    teamSemester: "",
    teamGithub: "",
    teamLinkdin: ""
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateError = (field, message) => {
    setError(prev => ({ ...prev, [field]: message }));
  };

  const validateField = (field, options = {}) => {
    const value = formData[field];
    if (options.required && !value) {
      updateError(field, "Required!");
      return false;
    }
    if (options.maxLength && value.length > options.maxLength) {
      updateError(field, `Max ${options.maxLength} characters`);
      return false;
    }
    if (options.patten && !options.patten.test(value)) {
      updateError(field, "Invalid format");
      return false;
    }
    updateError(field, "");
    return true;
  };

  const handleSubmit = async () => {
    const allFields = [...inputFieldList, ...(formData.teamsize === "Dynamic Duo" ? teamMateFields : [])];

    const isValid = allFields.reduce((acc, field) => {
      const valid = validateField(field.name, field.options);
      return acc && valid;
    }, true);

    if (!isValid) return;

    try {
      setLoading(true);
      await addDoc(collection(db, "registrations"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      
      setFormData({
        teamsize: "",
        teamName: "",
        fullName: "",
        phoneNum: "",
        emailId: "",
        github: "",
        linkdin: "",
        branch: "",
        semester: "",
        teamMember: "",
        teamPhoneNum: "",
        teamEmailId: "",
        teamBranch: "",
        teamSemester: "",
        teamGithub: "",
        teamLinkdin: ""
      });
      setError({});
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=' min-w-fit h-fit flex items-center justify-center pt-4'>
      <form className='rounded-xl m-2 flex flex-col items-center gap-4 font-poppins py-4 px-8 bg-[#1A1A1A]'>
        <h1 className='font-semibold text-3xl text-[#FF0105]'>Register Now</h1>

        <div className='grid gri'>
          <div className=' col-span-2 grid grid-cols-1 ms:grid-cols-2 gap-6'>

          {inputFieldList.map((ele) => (
            <InputField
            key={ele.name}
            {...ele}
            value={formData[ele.name]}
            onChange={
              ele.dropdown
              ? (value) => updateFormData(ele.name, value)
              : (e) => updateFormData(ele.name, e.target.value)
            }
            error={error[ele.name]}
            />
          ))}
          </div>

          {/* Conditional Rendering of Teammate Fields */}
          <div className={`transition-all duration-500 mt-6 ease-in-out overflow-hidden col-span-2 grid grid-cols-1 ms:grid-cols-2 gap-6 ${formData.teamsize === "Dynamic Duo" ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {teamMateFields.map((ele) => (
              <InputField
                key={ele.name}
                {...ele}
                value={formData[ele.name]}
                onChange={
                  ele.dropdown
                    ? (value) => updateFormData(ele.name, value)
                    : (e) => updateFormData(ele.name, e.target.value)
                }
                error={error[ele.name]}
              />
            ))}
          </div>

        </div>

        <button
          type='button'
          onClick={handleSubmit}
          disabled={loading}
          className='font-inter font-bold text-sm bg-[#FF0000CC] hover:bg-[#ff0000f0] rounded-lg px-8 py-1.5 cursor-pointer mt-4 mb-2 transition-all duration-300'
        >
          {loading ? "Submitting..." : "REGISTER!"}
        </button>
      </form>
    </section>
  );
};

export default Register;
