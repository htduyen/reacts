## useEffect

Adding Nested Properties As Dependencies To useEffect
In the previous lecture, we used object destructuring to add object properties as dependencies to useEffect().

    const { someProperty } = someObject;

    useEffect(() => {
        // code that only uses someProperty ...
    }, [someProperty]);

Ex:
 

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwprdIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Typing!!!!!!1");
            setFormIsValid(emailIsValid && passwprdIsValid);
        }, 1000);
        return () => {
            console.log("Clean up");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwprdIsValid]);