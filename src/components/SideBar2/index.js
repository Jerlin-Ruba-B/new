import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaAngleDown} from 'react-icons/fa'
import Picker from 'emoji-picker-react';
import './index.css'

const segments = [
    {
        name:"segment1",
    },
    {
        name:"segment2",
    },
    {
        name:"segment3",
    }
]
    


class SideBar2 extends Component {
    state={segmentList:segments,name:'',icon:'',des:'',isEmojiVisible:false}

    updateSegmentList = (event) => {

        event.preventDefault()
        const {name,icon,des} = this.state
        
        const newSegment = {
            name,icon,des
        }
        this.setState(prevState => ({segmentList:[...prevState.segmentList,newSegment]}))

    }

    updateName = event => {
        this.setState({name:event.target.value})
    }

    updateEmoji = (event) => {
        this.setState({icon:event.target.value})
    }

    updateDes = event => {
        this.setState({des:event.target.value})
    }
    updateEmojiImg = event => {
        this.setState(prevState => ({isEmojiVisible:!prevState.isEmojiVisible}))
    }

    onEmojiClick = (emojiObject) => {
        this.setState(prevState => ({icon:prevState.icon + emojiObject.emoji}))
        this.setState(prevState => ({isEmojiVisible:!prevState.isEmojiVisible}))
    }


    render(){
        const {segmentList,name,des,isEmojiVisible,icon} = this.state
        console.log(name)
        return (
            <div className='sb2Container'>
                <div>
                    <h1 className='prospector-title'>Prospector</h1>
                    <input type='search' placeholder='Search for a table or segment' />
                    <h2 className='segment-title'>SEGMENTS</h2>
                    <ul>
                        { segmentList.map((each) => 
                        <li className='segment-list'>{each.name}</li>)

                        }
                    </ul>
                </div>
                <Popup
     modal
     trigger={
        <button className='addSegmentBtn'>+ Add Segment</button>
     }
   >
     {close => (
       <>
         <form className='segmentFormContainer' onSubmit={this.updateSegmentList}> 
           <h1 className='newSegmentTitle'>Add a segment</h1>
           <label htmlFor='name' className='formLabel'>Name</label>
           <input type='text' placeholder='Ex.Software Engineer' onChange={this.updatename} value={name} id='name' />
           <label htmlFor='icon' className='formLabel'>Icon</label>
           <div className='emojiInput'>
           <input value={icon} onChange={this.updateEmoji}   />
           <FaAngleDown onClick={this.updateEmojiImg} />
           </div>
           {isEmojiVisible && <Picker pickerStyle={{ width:'100%'}} onEmojiClick = {this.onEmojiClick} /> }
           <label htmlFor='desc' className='formLabel'>Description</label>
           <input type='textarea' id='desc' onChange={this.updateDes} value={des} />
           <div className='btnContainer'>
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
         
       </>
     )}
   </Popup>
                
            </div>
        )
    }
}    

export default SideBar2