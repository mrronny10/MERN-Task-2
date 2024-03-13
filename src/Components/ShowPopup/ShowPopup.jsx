import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";

const PostPopup = () => {
  const { setShowPopup, user } = useContext(AuthContext);

  const onClose = () => {
    setShowPopup(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const postSubmit = ({ title, content }) => {
    const postData = {
      title,
      image: content,
      personName: user?.displayName,
      personImg: user?.photoURL,
      personEmail: user?.email,
      like: 0,
      comment: [],
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Post Submited",
            text: "Your Post successfull!",
            confirmButtonText: "Awesome!",
            confirmButtonColor: "#0A69DC",
            iconColor: "text-green-500",
            customClass: {
              title: "text-green-500 text-3xl",
              text: "text-slate-500",
            },
          });
          setShowPopup(false);
          location.reload();
        }
      });
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-75'>
      <div className='bg-white w-96 p-4 rounded-lg shadow-lg relative'>
        <h2 className='text-xl font-semibold mb-4'>Create Post</h2>
        {/* Add your form inputs for creating a post */}
        <form onSubmit={handleSubmit(postSubmit)}>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='text-sm font-medium text-gray-700'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='border border-gray-300 rounded-md p-2 w-full'
              {...register("title", { required: true })}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='content'
              className='text-sm font-medium text-gray-700'
            >
              Image URL
            </label>
            <textarea
              id='content'
              className='border border-gray-300 rounded-md p-2 w-full'
              {...register("content", { required: true })}
            />
          </div>
          {/* Add more form fields as needed */}
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='bg-[#0A69DC] w-full text-white px-4 py-2 rounded-md mr-2'
            >
              Post
            </button>
          </div>
          <button
            type='button'
            className='bg-[#fdfdfd] text-[#0A69DC] p-2 rounded-md absolute top-2 right-2'
            onClick={() => onClose()}
          >
            <FaWindowClose size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostPopup;
