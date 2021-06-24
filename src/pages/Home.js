import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import { logoutAction } from '../store/authReducer';



export function Home() {

  const userInfo = useSelector(state => state.authReducer.userInfo);

  const dispatch = useDispatch();
  const history = useHistory();

  const click = () => {
    dispatch(logoutAction());
    history.push('/login');
  }

  return (
    <>
      <div className="row justify-content-center align-items-center" style={{ marginTop: "15rem" }}>
        <div className="col-auto">
          <div className="text-center" style={{ width: "20rem" }}>
            {userInfo ?
              userInfo.firstName ?
                <>

                  Hello, {userInfo.firstName} {userInfo.lastName}
                  <br></br>
                  You are logged in in with account of : {userInfo.email}
                  <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={click}
                  >
                    Logout
                  </Button>
                </>
                :
                <>
                  You are logged in with account of :  {userInfo.email}
                  <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={click}
                  >
                    Logout
                  </Button>

                </>

              :
              <>
                You are not logged in
                <Button type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={click}
                >
                  Redirect to Login page
                </Button>
              </>

            }

          </div>
        </div>
      </div>
    </>
  )
}
