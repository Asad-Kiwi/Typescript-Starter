/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {USER_LOGIN} from '../../constants/actionTypes';
import {LoginContext} from '../../contextAPI/loginContext';
import {authState, onLoginStart} from '../../redux/reducers/authSlice';
import {useAppDispatch, useAppSelector} from '../reduxHooks';

const useLoginHooks = () => {
  const {userLogin} = useAppSelector(authState);
  const dispatch = useAppDispatch();
  const {setProductList, setIsLoading} = React.useContext(LoginContext);

  React.useEffect(() => {
    if (userLogin.status === USER_LOGIN.SUCCESS) {
      setProductList(userLogin.success?.products ?? []);
    }
    setIsLoading(userLogin.isLoading);
  }, [userLogin.status]);

  const fetchProductList = React.useCallback(() => {
    dispatch(onLoginStart());
  }, []);

  return {fetchProductList};
};

export default useLoginHooks;
