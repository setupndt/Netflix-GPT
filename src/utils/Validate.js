

const Validate = (email, password,name)=>{

const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
const isNameValid=/^[0-9A-Za-z]{6,16}$/.test(name);

 if (!email) return "Email is required";
  if (!password) return "Password is required";
  if (name !== "skip" && !name) return "Name is required";

 return null;
}
export default  Validate;