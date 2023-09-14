import {Component} from 'react'
import Popup from 'reactjs-popup'
import {v4 as uuidV4} from 'uuid'
import {FaAngleDown} from 'react-icons/fa'
import Picker from 'emoji-picker-react';
import {BsJournalBookmark,BsChevronDown} from 'react-icons/bs'
import {MdOutlineCelebration} from 'react-icons/md'
import {RiGraduationCapLine} from 'react-icons/ri'
import {AiOutlineBell,AiOutlineCloudDownload} from 'react-icons/ai'

import './index.css'

class MainCard extends Component{
state = {tableIcon:'',isEmojiVisible:false,tableName:'',tableListS1:[],tableListS2:[]}

updateEmojiImg = event => {
    this.setState(prevState => ({isEmojiVisible:!prevState.isEmojiVisible}))
}

updateEmoji = (event) => {
    this.setState({tableIcon:event.target.value})
}

onEmojiClick = (emojiObject) => {
    this.setState(prevState => ({tableIcon:prevState.tableIcon + emojiObject.emoji}))
    this.setState(prevState => ({isEmojiVisible:!prevState.isEmojiVisible}))
}

updateTableName = event => {
    this.setState({tableName:event.target.value})
}

addNewTable = event => {
    event.preventDefault()
    const {tableName,tableIcon} = this.state
    const newTable = {
        id:uuidV4,
        tableName,
        tableIcon,
    }
    this.setState(prevState => ({tableListS1:[...prevState.tableListS1,newTable]}))
    
}

addNewTable2 = event => {
    event.preventDefault()
    const {tableName,tableIcon} = this.state
    const newTable2 = {
        id:uuidV4,
        tableName,
        tableIcon,
    }
    this.setState(prevState => ({tableListS2:[...prevState.tableListS2,newTable2]}))
}

    render(){
        const {tableIcon,tableName,isEmojiVisible,tableListS1,tableListS2} = this.state
        return(
            <div>
                <div className='headerContainer'>
                    <BsJournalBookmark className='headerIcon' />
                    <BsChevronDown className='headerIcon'  />
                    <MdOutlineCelebration className='headerIcon'  />
                    <RiGraduationCapLine className='headerIcon' />
                    <AiOutlineBell className='headerIcon' />
                    <AiOutlineCloudDownload className='headerIcon' />
                </div>
                <hr className='horiLine' />
                <div className='mainSegmentCard'>
                    <h1 className='segmentHeadings'>Segment1</h1>
                    <div className='listC'>
                    {tableListS1.map((eachTable) => 
                    <div className='miniCard'>
                        <div className='tableCardContainer' >
                            {tableIcon}
                        </div>
                        <p className='miniCardName'>{tableName}</p>
                        </div>
                     )}
                    <Popup
     modal
     trigger={
        <button type='button' className='addBtnS' >+</button>
     }
   >
    {close => (
        <form className='tableForm' onSubmit={this.addNewTable}>
            <h1 className='formHeading'>Add a table</h1>
            <label htmlFor='tableName' className='labels'>Name*</label>
            <input type='text' id='tableName' placeholder='Ex.Software Engineering' onChange={this.updateTableName} />
            <label htmlFor='tableIcon' className='labels'>Icon</label>
            <div className='iconsContainer'>
            <input id='tableIcon' onChange={this.updateEmoji} value={tableIcon} />
            <FaAngleDown onClick={this.updateEmojiImg} />
            </div>
            {isEmojiVisible && <Picker pickerStyle={{ width:'100%'}} onEmojiClick = {this.onEmojiClick} />}
            <label htmlFor='tableColor' className='labels'>Color</label>
            <input id='tableColor' />
            <div className='btnsContainer'>
            <button
           type="button"
           className='cancelBtn'
           onClick={() => close()}
         >
           Cancel
         </button>
         <button
           type="submit"
           className='saveBtn'
           
           
         >
           Save
         </button>
            </div>
        </form>
    )}
   </Popup>
   </div>
                    
                </div>
                <div className='mainSegmentCard'>
                    <h1 className='segmentHeadings'>Segment2</h1>
                    <div className='listC'>
                    {tableListS2.map((eachTable) => 
                    <div className='miniCard'>
                        <div className='tableCardContainer' >
                            {tableIcon}
                        </div>
                        <p className='miniCardName'>{tableName}</p>
                        </div>
                     )}
                    <Popup
     modal
     trigger={
        <button type='button' className='addBtnS' >+</button>
     }
   >
    {close => (
        <form className='tableForm' onSubmit={this.addNewTable2}>
            <h1 className='formHeading'>Add a table</h1>
            <label htmlFor='tableName' className='labels'>Name*</label>
            <input type='text' id='tableName' placeholder='Ex.Software Engineering' onChange={this.updateTableName} />
            <label htmlFor='tableIcon' className='labels'>Icon</label>
            <div className='iconsContainer'>
            <input id='tableIcon' onChange={this.updateEmoji} value={tableIcon} />
            <FaAngleDown onClick={this.updateEmojiImg} />
            </div>
            {isEmojiVisible && <Picker pickerStyle={{ width:'100%'}} onEmojiClick = {this.onEmojiClick} />}
            <label htmlFor='tableColor' className='labels'>Color</label>
            <input id='tableColor' />
            <div className='btnsContainer'>
            <button
           type="button"
           className='cancelBtn'
           onClick={() => close()}
         >
           Cancel
         </button>
         <button
           type="submit"
           className='saveBtn'
           
           
         >
           Save
         </button>
            </div>
        </form>
    )}
   </Popup>
   </div>
                </div>
            </div>
        )
    }
}

export default MainCard