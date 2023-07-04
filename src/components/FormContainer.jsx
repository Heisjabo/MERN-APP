
const FormContainer = ({children}) => {
    return (
        <div className="flex  flex-col w-[40%] mx-auto py-8 px-4 gap-4 mt-12 rounded-[8px] border border-[#b0b3b8] bg-transparent">
            {children}
        </div>
    )
}

export default FormContainer