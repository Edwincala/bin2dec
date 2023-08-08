import { useRef, useState } from "react";
import "./App.css";

function App() {
    const binValue = useRef();

    const [decValue, setDecValue] = useState(0);

    const validation = (array1, array2) => {
        return array2.every((elem) => array1.includes(elem));
    };

    const conversion = (value) => {
        value.reverse();
        let conversion = 0;
        for (let index = 0; index < value.length; index++) {
            console.log(typeof parseInt(value[index]));
            conversion += parseInt(value[index]) * Math.pow(2, index);
            console.log(conversion, index);
        }
        console.log(conversion);
        return conversion;
    };

    const bin2dec = () => {
        console.log(binValue.current.value.split(""));
        const inputArr = binValue.current.value.split("");
        // conversion operation missing
        const convertedVal = conversion(inputArr);
        const validInput =
            validation(["0", "1"], inputArr) && inputArr.length < 9;
        validInput
            ? setDecValue(`The decimal conversion is: ${convertedVal}`)
            : setDecValue("Error");
    };

    return (
        <div className="app">
            <input
                type="number"
                onChange={bin2dec}
                ref={binValue}
                placeholder="Please enter the binary number"
            />
            <p className="dec-conversion">{decValue}</p>
        </div>
    );
}

export default App;
