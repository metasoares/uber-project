import { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'


const Cancel = () => {


   


    return (
        <Wrapper>
            <QuestionsContainer>
                <QuestionTitle>Why do you cancel your trip?</QuestionTitle>
                <QuestionsCheckBoxesContainer>
                    <Questions>
                       <Question>1. I could not find the driver.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                    <Questions>
                       <Question>2. The driver is not responding.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                    <Questions>
                       <Question>3. The driver is not on time.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                    <Questions>
                       <Question>4. I have got an emergency.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                    <Questions>
                       <Question>5. I would rather stay at home than going out.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                    <Questions>
                       <Question>6. I have another reason.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                    <Questions>
                       <Question>7. I have just tried to see how it works.</Question>
                       <InputCheckBox type="checkbox"  value="" />
                    </Questions>
                </QuestionsCheckBoxesContainer>
                <SubmitButton  >Submit</SubmitButton>
            </QuestionsContainer>
        </Wrapper>
    )
}

export default Cancel

const Wrapper = tw.div`
w-full h-screen flex  bg-gray-300 justify-center `

const QuestionsContainer = tw.div`
mt-5 w-5/6 h-1/2 flex flex-col rounded-t-lg bg-white cursor-pointer
`

const QuestionTitle = tw.div`
flex items-center justify-center bg-blue-500 text-white  h-12 border-b  text-sm`

const QuestionsCheckBoxesContainer = tw.div`
flex flex-col  h-full w-full  p-3 `

const Questions = tw.div`
flex  flex-row  items-center w-full  h-6  border-b `

const Question = tw.div`
text-xs  flex flex-1 `

const InputCheckBox = tw.input`
border-gray-50 outline-none opacity-0.5 
 `

 const SubmitButton = tw.button`
 text-center text-white w-full bg-black shadow-lg text-sm`


