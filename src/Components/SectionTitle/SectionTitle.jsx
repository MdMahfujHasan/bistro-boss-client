
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-1/5 mx-auto text-center my-12">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-2 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;