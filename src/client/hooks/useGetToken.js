const useGetToken = () => {
    let token=localStorage.getItem('sessionJWT');
    token=`Bearer ${token}`

    return token
};

export {useGetToken};
