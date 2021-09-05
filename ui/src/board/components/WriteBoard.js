import React from 'react'
import styled from 'styled-components'

const WriteBoard = () => (<>
    <div>
        <table border="1" width='1200' align='center'>
            <tr>
                <th colSpan="2">
                    자유게시판 글쓰기
                </th>
            </tr>
            <tr>
                <td width="50">
                    <select>                        
                        <option>유머</option>
                        <option>잡담</option>
                        <option>확진자 발견</option>
                    </select>
                    <input type="text" placeholder="제목을 입력하시오"
                    maxLength='20' cols="100"/>
                </td>
            </tr>
            <div class="note-editor note-frame car">
                <td colSpan="2">
                <Tool class="note-toolbar card-header" role="toolbar">
                    <div class="note-btn-group btn-group note-font">
                        <button type="button" class="note-btn btn btn-light btn-sm note-btn-strikethorough"
                        role="button" tabindex="-1" title aria-label="Strikethrough (CTRL+SHIFT+S)"
                        data-original-title="Strikethrough(CTRL+SHIFT+S)">
                            <i class="note-icon-strikethrough">::before == $0 </i>
                        </button>
                        <button type="button" class="note-btn btn btn-light btn-sm note-btn-superscript"
                        role="button" tabindex="-1" title aria-label="Superscript" data-original-title="Superscript">
                            <i class="note-icon-superscript">::before </i>
                        </button>
                        <button type="button" class="note-btn btn btn-light btn-sm note-btn-subscript"
                        role="button" tabindex="-1" title aria-label="Subscript" data-original-title="Subscript">
                            <i class="note-icon-subscript">::before </i>
                        </button>
                    </div>
                </Tool>
                <div class="note-editing-area">
                    <div class="note handle">
                        <Note class="note-control-selection">
                            <div class="note-control-selection-bg">
                                <div class="note-control-horder note-control-nw"></div>
                                <div class="note-control-horder note-control-ne"></div>
                                <div class="note-control-horder note-control-sw"></div>
                                <div class="note-control-horder note-control-se"></div>
                            </div>
                        </Note>
                        <Textarea class="note-codable" role="textbox" aria-multiline="true"></Textarea>
                        <Block role="textbox" aria-multiline="true">
                        </Block>
                    </div>                
                </div>
                </td>
            </div>
            <tr>
                <td colSpan="2" align="right">
                    <input type="button" value="등록"/>
                    <input type="button" value="목록으로"/>
                </td>
            </tr>
        </table>
        
    </div>
</>
)

export default WriteBoard

const Note = styled.div`
    display:none
`

const Block = styled.div`
    height:508.344px
    class=note-editable card-block
    contenteditable=true
`

const Textarea = styled.textarea`
    resize:none;
`

const Tool = styled.div`
    position: relative
    top: 0px
    width: 100%
`