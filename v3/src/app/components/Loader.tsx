import { Box, Button, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react"
// import ThemeSwitcher from "./ThemeSwitcher"
import { useTheme } from "@/helpers/hooks";
import CustomButton from "./CustomButton";
import { useEffect, useRef, useState } from "react";

const Loader = () => {
    const { setTheme, activeColor } = useTheme("orange", 500);
    const loaderRef=useRef<HTMLDivElement|null>(null);
const [showSpinner,setShowSpinner]=useState(true)
    const hideLoader=()=>{
if(loaderRef){
    loaderRef.current?.classList.add('slide-out-top')
}
    }
    useEffect(()=>{
setTimeout(()=>{
setShowSpinner(false)
},3000)
    },[])
const style={_before:{
    top: 0,
    pos: "absolute",
    h: "full",
    w: 'full',
    content: `''`,
    bg: "var(--primary-theme-color)",
    left: 0,
    transition: "0.4s ease-in-out",
  },color:'black', px:4,
  py:2,  border:"2px solid var(--primary-theme-color)",
  bg:"transparent",_hover:{ _before: { w: 0 }, color: "var(--primary-theme-color)" }}
  return (
   <Flex ref={loaderRef} bg={'var(--bg-color)'} pos={'fixed'} w={'full'} h={'full'} inset={0} zIndex={999999} align={'center'} justify={'center'}>

<Stack align={'center'}  textAlign={'center'}  border={'4px solid var(--primary-theme-color)' } py={{lg:10,base:6}} px={{lg:10,base:4}}>
    {showSpinner && 
<Spinner speed={'0.65s'} label="loading" size={'sm'} color={'var(--primary-theme-color)'}/>
    }
<Heading color={'white'}>Choose A theme</Heading>
<Text fontSize={'sm'} color={'gray'}>You can change this later</Text>

{/* <ThemeSwitcher setTheme={setTheme} activeColor={activeColor}  fixedPos={false}/> */}

<Button onClick={()=>hideLoader()} {...style} variant={'unstyled'} rounded={'none'} mt={6} size={'lg'}><Text as={'span'} pos={'relative'}> Continue</Text></Button>
</Stack>
   </Flex>
  )
}

export default Loader
