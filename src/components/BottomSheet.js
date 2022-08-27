import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import style from '../style/bottomSheet.module.css'
import StartRoom from './botom_sheets/StartRoom'
import NewRoom from './botom_sheets/NewRoom'

const BottomSheet = (props) => {
  return (
    <div>
        <SwipeableBottomSheet 
        open={props.sheetVisible}
        onChange= {() => {
            props.setSheetVisible(!props.sheetVisible)
            props.setItemsVisible(true)
        }}
        fullScreen = {props.sheetTitle == 'room detail' ? true: false}
        >
        <div className={style.BottomSheetContainer} style={{backgroundColor: props.sheetTitle == 'profile' ? 'transparent' : ''}}>
            {/* <StartRoom 
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={(item) => {
                   props.setItemsVisible(item);
                   props.setItemsVisible(true); 
            }}
            /> */}
            {props.sheetTitle == "new room" ? (
                 <NewRoom
                 cardDetail={props.cardDetail}
                 setSheetVisible={(item) => {
                        props.setSheetVisible(item);
                        props.setItemsVisible(true); 
                 }}
                 />
            ) : props.sheetTitle == "start room" ? (
                
                <StartRoom 
                setSheetCreateRoom={props.setSheetCreateRoom}
                setSheetVisible={(item) => {
                       props.setItemsVisible(item);
                       props.setItemsVisible(true); 
                }}
                />
            ) : (
                ""
            
            )}
        </div>
            </SwipeableBottomSheet>
    </div>
  )
}

export default BottomSheet