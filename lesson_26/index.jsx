 import React from 'react';
 import ReactDom from 'react-dom';

// // function Section(props){
// //     return(
// //         <section>
// //             This section without <strong>{props.htmlTag}</strong>
// //         </section>
// //     )
// // }

const Caption = (props) =>{
    const CaptionTag = props.tagType;
    return(
        <CaptionTag>
           {props.captionText}
        </CaptionTag>
    )
}
const Description = (props) =>{
    const DescroptionTag = props.tagType;
    return(
        <DescroptionTag>
           {props.descriptionText}
        </DescroptionTag>
    )
}
const Section = (props) =>{
    return(
                <section className="myclass">
                    <Caption 
                        captionText = {props.captionText}
                        tagType = {props.captionTagType}
                    />
                    <img src={props.srcImg} width="450"/>  
                    <br />
                    <Description 
                        descriptionText = {props.descriptionText}
                        tagType = {props.descriptionTagType}
                    />
                    
                    <hr />
                </section>
            )
}
ReactDom.render(
    <div>
        <Section 
            captionText = 'TRAVELCON: UPDATES AND NEW TICKET INFORMATION!!!'
            captionTagType = 'h1'
            descriptionText = {'Hey all! There are only three more months to TravelCon! (Time flies, huh?) This is going to be an amazing event, so I want to share some more updates about what’s happening:'}
            descriptionTagType = 'p'
            srcImg= {require("/img/Travel.jpg")}
            
        />
        <Section 
            captionText = 'HOW TO BUY THE BEST TRAVEL INSURANCE IN 2018'
            captionTagType = 'h1'
            descriptionText = 'Travel insurance is one of the most important things you’ll need for your trip. You wouldn’t have a car without car insurance, a home without home insurance, and you can’t have a trip without travel insurance.'
            descriptionTagType = 'q'
            srcImg= {require("/img/Airplane.jpg")}
        />
        <Section 
            captionText = 'HOW TO CHOOSE AND BUY THE RIGHT TRAVEL BACKPACK'
            captionTagType = 'h1'
            descriptionText = 'There are so many options out there that it can be very confusing to pick the right backpack.'
            descriptionTagType = 'q'
            srcImg= {require("/img/chooseabackpack.jpg")}
        />
    </div>,
    document.getElementById('root')

);


function RecipeList(props) {
    const companylist = props.companylist;
    const listItems = companylist.map((companylist) =>
      <li key={companylist.toString()}>{companylist}</li>
    );
    return (
        <div className="recepi">
            <h3>{props.company}</h3>
            <ul>{listItems}</ul>
        </div>
      
    );
  }
  
  const companylist = [
      'REI', 
      'EMS', 
      'MEC (Canada)', 
      'GO Outdoors (UK)'
    ];
  ReactDom.render(
    <RecipeList 
    company = {'Recommended companies'}
    companylist={companylist} 
    />,
    document.getElementById('app')
  );