import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const VaccineResult = ()=>{
    const data = {
        labels:["안전","불안전"],
        datasets: [{
            data: [40, 60],      // 섭취량, 총급여량 - 섭취량
            backgroundColor: [
              '#9DCEFF',
              '#F2F3F6'
            ],
            cutoutPercentage:0,
            borderWidth: 0,
            scaleBeginAtZero: true,
          }
        ]
    }
    
    
    return (
        <form>
            <Doughnut data = {data}/>
            <fieldset>
                <legend>결과보기</legend>
                <table>
                    <tr>
                    <th>d</th>
                    <th>d</th>
                    </tr>
                    <tr>
                    <th>d</th>
                    <th>d</th>
                    <th>d</th>
                    <th>d</th>
                    </tr>
                </table>
            </fieldset>
        </form>
        
        )

}
export default VaccineResult