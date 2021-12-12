import React from 'react'
import './Card.css'
import { data } from './data'

// const MainContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: space-around;
//   box-sizing: border-box;
//   width: 100%;
//   height: 50%;
//   padding: 15px;
//   padding-top: 30px;

//   @media screen and (max-width: 414px) {
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     height: 60%;
//   }
// `;

// const Card = styled.div`
//   position: relative;
//   width: 30%;
//   height: 100%;

//   transform-style: preserve-3d;
//   transition: all 1s ease-in-out;

//   &:hover {
//     transform: rotateY(180deg);
//   }

//   @media screen and (max-width: 420px) {
//     width: 100%;
//     align-items: center;
//     margin-bottom: 10px;
//   }
// `;

// const Front = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   border-radius: 4px;
//   backface-visibility: hidden;
//   background: whitesmoke;
//   color: black;
// `;

// const Back = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   border-radius: 4px;
//   backface-visibility: hidden;
//   background: lightcoral;
//   color: black;
//   transform: rotateY(180deg);
// `;

//

// function Flipcard({ date }) {
//   const toggle = data.date === date;
//   console.log(date);
//   return toggle ? (
//     <>
//       <MainContainer className="Container">
//         {data.data.map((m, idx) => {
//           return (
//             <Card key={m} className={`Card Card${idx + 1}`}>
//               <Front className="fr">{m.qs}</Front>
//               <Back className="bc">{m.answer}</Back>
//             </Card>
//           );
//         })}
//       </MainContainer>
//     </>
//   ) : (
//     <>
//       <MainContainer className="Container">
//         <Card className="Card Card1">
//           <Front className="fr">fff</Front>
//           <Back className="bc">dddd</Back>
//         </Card>
//         <Card className="Card Card2">
//           <Front className="fr"></Front>
//           <Back className="bc"></Back>
//         </Card>
//         <Card className="Card Card3">
//           <Front className="fr"></Front>
//           <Back className="bc"></Back>
//         </Card>
//       </MainContainer>
//     </>
//   );
// }

// export default Flipcard;

function Flipcard() {
  const [cardpage,setCardpage] = useState(1)
  
  function nextPage() {
    return(
      setCardpage
    )
  }
  return (
    <div className='ModalCard'>
      
      <div className='Btn BtnLeft'>◀️</div>
      
      <div className='CardContainer'>
        <div className='cardview'>
        
                    {/* <div className='Card Card1'>
            <div className='fr'>fff</div>
            <div className='bc'>dddd</div>
          </div>
          <div className='Card Card2'>
            <div className='fr'></div>
            <div className='bc'></div>
          </div>
          <div className='Card Card3'>
            <div className='fr'></div>
            <div className='bc'></div>
          </div> */}
        </div>
      </div>

      <div className='Btn BtnRight'>▶️</div>
    </div>
  )
}

export default Flipcard
