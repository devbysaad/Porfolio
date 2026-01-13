import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models";
import { Loader, FadeUp } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [inpVal, setInpVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [textaVal, setTextaVal] = useState("");
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const getInput = (e) => setInpVal(e.target.value);
  const getEmail = (e) => setEmailVal(e.target.value);
  const getTexta = (e) => setTextaVal(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    setCurrentAnimation("hit");

    if (inpVal === "" || emailVal === "" || textaVal === "") {
      toast.warn("You missed a field", {
        autoClose: 500,
        hideProgressBar: false,
      });
      setCurrentAnimation("idle");
      return;
    }

    emailjs
      .sendForm(
        "service_vxyotcd",
        "template_umq2uh5",
        form.current,
        "0kaS0Fh3vdQJZwSbc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Done", { autoClose: 500, hideProgressBar: false });
          setInpVal("");
          setEmailVal("");
          setTextaVal("");
          setTimeout(() => {
            setCurrentAnimation("idle");
          }, 3000);
        },
        (error) => {
          console.log(error);
          toast.error("Error", { autoClose: 500, hideProgressBar: false });
          setCurrentAnimation("idle");
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <ToastContainer />
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <div className='mt-10 mb-5'>
            <FadeUp text={
                <h3 className='text-slate-400 text-lg'>
                    Have any idea? Got any query? Wanna meet me? Don't hesitate to use the form.
                </h3>
            } />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='w-full flex flex-col gap-7'
        >
          <FadeUp text={
            <label className='text-white font-semibold'>
              Name
              <input
                type='text'
                name='user_name'
                className='input'
                placeholder='John'
                value={inpVal}
                onChange={getInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
          } />
          
          <FadeUp text={
            <label className='text-white font-semibold'>
              Email
              <input
                type='email'
                name='user_email'
                className='input'
                placeholder='John@gmail.com'
                value={emailVal}
                onChange={getEmail}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
          } />
          
          <FadeUp text={
            <label className='text-white font-semibold'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea'
                placeholder='Write your thoughts here...'
                value={textaVal}
                onChange={getTexta}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
          } />

          <FadeUp text={
             <button
                type='submit'
                className='btn'
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                Submit
              </button>
          } />
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;