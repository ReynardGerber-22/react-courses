import { useState } from "react";

type ValueReturn = {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number

}
type InputComponentProps = {
    onInputChange: (values: ValueReturn) => void
}

type InputState = {
    initialInvestment: string,
    annualInvestment: string,
    expectedReturn: string,
    duration: string
}

export const InputComponent = ({ onInputChange }: InputComponentProps) => {

    const [values, setValues] = useState<InputState>({
        initialInvestment: "",
        annualInvestment: "",
        expectedReturn: "",
        duration: ""
    });

    const updateValues = (field: keyof ValueReturn, value: string) => {
        setValues((prevValues) => {
            const updatedInputValues: InputState = {
                ...prevValues,
                [field]: value,
            };

            const updatedValues: ValueReturn = {
                initialInvestment: Number(updatedInputValues.initialInvestment) || 0,
                annualInvestment: Number(updatedInputValues.annualInvestment) || 0,
                expectedReturn: Number(updatedInputValues.expectedReturn) || 0,
                duration: Number(updatedInputValues.duration) || 0,
            }

            onInputChange(updatedValues);
            return updatedInputValues;
        });
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" step="0.01" onChange={(e) => { updateValues("initialInvestment", e.target.value) }} value={values.initialInvestment}></input>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" step="0.01" onChange={(e) => { updateValues("annualInvestment", e.target.value) }} value={values.annualInvestment}></input>
                </div>
            </div>
            <br></br>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" step="0.01" onChange={(e) => { updateValues("expectedReturn", e.target.value) }} value={values.expectedReturn}></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" step="1" onChange={(e) => { updateValues("duration", e.target.value) }} value={values.duration}></input>
                </div>
            </div>
        </div>

    )
}