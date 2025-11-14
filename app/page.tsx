import { InputDefault }  from '@/components/inputs/InputDefault'
import { InputDisabled } from '@/components/inputs/InputDisabled'
import { InputFile } from '@/components/inputs/InputFile'
import { InputWithButton } from '@/components/inputs/InputWithbutton'
import { InputWithLabel } from '@/components/inputs/InputWithLabel'
import { AvatarDemo } from '@/components/Avatar'


export default function Page() {
  return (
    <>
      <AvatarDemo />
      <InputDefault />
      <InputFile/>
      <InputDisabled/>
      <InputWithLabel/>
      <InputWithButton/>
      
    </>   
  )
}
