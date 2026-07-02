import { formatter } from "../../util/investment.js"

export const Results = ({ results, annualInvestment }: any) => {

    let total = 0
    let investmentCapital = (results[0] ? results[0].valueEndOfYear  - results[0].interest : 0)

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result: any, index: number) => {
                    total = (index > 0) ? total + result.interest  : result.interest
                    investmentCapital = (index > 0)  ? investmentCapital + annualInvestment : investmentCapital
                    return (
                        <tr>
                            <td className="center">{result.year}</td>
                            <td className="center">{formatter.format(result.valueEndOfYear)}</td>
                            <td className="center">{formatter.format(result.interest)}</td>
                            <td className="center">{formatter.format(total)}</td>
                            <td className="center">{formatter.format(investmentCapital)}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}