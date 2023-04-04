const Action = ({ setModalOpen }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <button onClick={onNewTransaction} className="w-full rounded-lg bg-[#16d542] py-3 hover:bg-opacity-70">
                <span className="font-medium text-white">New</span>
            </button>
            <div className="flex items-center justify-center pt-10 text-white text-sm font-light italic ">
                <a href="https://naga-coins.com" className="">Powered by Naga Apparel</a>
            </div>
        </div>
    )
}

export default Action
