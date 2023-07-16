import { Form, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [usernamel, setusernamel] = useState("");

  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();
  }

  return (
    <div class="mt-[70px] flex h-full justify-center items-center mx-auto text-white">
      <div class="grid   mx-auto  mb-4 items-center ">
        <div class="flex  flex-col justify-center items-center mx-auto h-[420px] mb-5 lg:h-[400px] lg:p-10 p-6  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
              color: "white",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            // class="flex flex-col justify-center items-center"
          >
            <div class="flex flex-col mx-auto justify-center items-center gap-5 mb-8">
              <Input
                class=""
                placeholder="username"
                onChange={(e) => setusernamel(e.target.value)}
              />
              {/* <Input
                class=""
                placeholder="email"
                onChange={(e) => setemail(e.target.value)}
              /> */}

              <Input.Password
                placeholder="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 1,
              }}
            >
              <button
                class="bg-blue-700 rounded-md text-lg p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
                onClick={submitHandle}
              >
                Login
              </button>
            </Form.Item>
          </Form>
          <Link to="/auth/forpass">
            <h1 class="m-1 p-2  ">Forget Password</h1>
          </Link>
          <h1 class="m-1 p-2 ">
            Do not have account{" "}
            <Link
              to="/signup"
              class="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 "
            >
              SignUp
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
