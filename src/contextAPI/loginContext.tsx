import React from 'react';

const LoginContext = React.createContext<any | null>(null);

const LoginProvider = (props: React.PropsWithChildren<{}>) => {
  const [ProductList, setProductList] = React.useState<never[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{
        ProductList,
        setProductList,
        isLoading,
        setIsLoading,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export {LoginContext, LoginProvider};
