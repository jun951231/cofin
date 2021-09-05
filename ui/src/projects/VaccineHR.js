import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const VaccineHR = () =>{
    return(<body margin ="">
    <Vform>

        <Vsection>
            <Vdiv>
                <fieldset>
                <legend>기본 정보</legend>
                    <Vp>
                        <Vlabel>1.나의 이름은? </Vlabel>
                        <input type="check box"></input>
                    </Vp>
                    <Vp>
                        <Vfieldset>
                        <Vlabel>2. 나이를 입력해주세요.</Vlabel>    
                        만<input type="check-box"/>세
                        </Vfieldset>
                    </Vp>
                    <Vp>
                        <Vfieldset>
                        <Vlabel>3. 성별을 선택해주세요.</Vlabel>    
                        남성    <input type="radio"></input>
                        여성    <input type="radio"></input>
                        </Vfieldset>
                    </Vp>
                    <Vp>
                        <Vfieldset>
                        <Vlabel>4. 몸무게를 입력해주세요.</Vlabel>    
                        <input type="check-box"></input>kg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                        </Vfieldset>
                    </Vp>
                    <Vp>
                        <Vfieldset>
                        <Vlabel>5. 키를 입력해주세요.</Vlabel>    
                        <input type="check-box"/>cm
                        </Vfieldset>
                    </Vp>
                </fieldset>
            </Vdiv>
        </Vsection>

        <Vsection>
            <Vdiv>
                <Vp>
                    <thead><strong>질환 관련(본인과 관련된 질환에 대하여 체크해주세요.)</strong></thead>
                    <table border="1">

                        <tr>
                        <th>구분</th>
                        <th>있음</th>
                        <th>없음</th>
                        </tr>

                        <tr>
                        <th>암</th>
                        <th><input type="radio"/></th>
                        <th><input type="radio"/></th>
                        </tr>

                        <tr>
                        <th>당뇨병</th>
                        <th><input type="radio"/></th>
                        <th><input type="radio"/></th>
                        </tr>

                        <tr>
                        <th>암</th>
                        <th><input type="radio"/></th>
                        <th><input type="radio"/></th>
                        </tr>
                        <tr>
                        <th>암</th>
                        <th><input type="radio"/></th>
                        <th><input type="radio"/></th>
                        </tr>
                        
                    </table>

                </Vp>
            </Vdiv>
        </Vsection>
        <input type="submit" value="결과 보기"></input>
        <Vlabel><Link to='vaccine-result'>다음으로</Link></Vlabel>
    </Vform>
    </body>)
    }
export default VaccineHR
const Vdiv = styled.div`
    width: 900px;
    height: 250px;
    margin: 0 0 0 39px;
    padding-top: 35px;`
const Vp = styled.p`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const Vsection = styled.section`
    width: 1000px;
    height: 325px;
`
const Vform = styled.form`
    margin-bottom: 20px;
    display: block;
    margin-top: 0em;    
`
const Vlabel = styled.label`
    cursor: default;
`
const Vfieldset = styled.fieldset`
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    display: block;
    margin: 0;
    padding:0;
    clear: both;
    border: 0;
`
const Vlegend = styled.legend`
    display: block;
    float: left;
    width: 220px;
    height: 23px;
    margin: 10px 0 0 40px;
    padding: 0;
`
    