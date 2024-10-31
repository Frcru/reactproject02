import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {CustomInput} from "../../components";
import {schema, FormValues} from "../../models"


// isDirty, dirtyField como argumento en formState en caso 
// quiera saber si tocaron el form y que input se tocaron
export const CustomForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode:"onBlur",
        // defaultValues:{
        //     name: "test",
        //     email: "test@email.com",
        //     password: "1234123",
        //     confirmPassword: "1234123"
        // }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>            
            <CustomInput name="name" control={control} label="Name" type="text" error={errors.name}/>
            <CustomInput name="email" control={control} label="Email" type="email" error={errors.email}/>
            <CustomInput name="password" control={control} label="Password" type="password" error={errors.password}/>
            <CustomInput name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword}/>
            <button type="submit">Submit</button>
        </form>
    )
}