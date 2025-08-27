

const SponsorSlider = () => {
    const teams = [
        { name: 'PWR', src: 'https://cdn.pixabay.com/photo/2023/03/06/13/58/brand-7833518_1280.png' },
        { name: 'Prem Rugby', src: 'https://cdn.pixabay.com/photo/2023/03/06/13/56/icon-7833512_1280.png' },
        { name: 'Nottingham Forest', src: 'https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833521_1280.png' },
        { name: 'AZ Alkmaar', src: 'https://cdn.pixabay.com/photo/2016/12/16/14/08/pattern-1911479_1280.png' },
        { name: 'Crystal Palace', src: 'https://cdn.pixabay.com/photo/2021/09/16/08/56/leaves-6629581_1280.png' },
        { name: 'Everton', src: 'https://cdn.pixabay.com/photo/2020/11/09/01/46/leaves-5725356_1280.png' },
        { name: 'Slavia Prague', src: 'https://cdn.pixabay.com/photo/2018/02/26/20/46/bitcoin-3183979_1280.png' },
        { name: 'West Ham United', src: 'https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' },
        { name: 'Rugby Union', src: 'https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png' },
    ];

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:space-x-12">

                <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/4 lg:w-1/5">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                        Sponsor of your favourite teams
                    </h2>
                </div>

                <div className="w-full md:w-3/4 lg:w-4/5 overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee-teams">
                        {teams.map((team, index) => (
                            <img
                                key={index}
                                src={team.src}
                                alt={team.name}
                                className="inline-block h-16 md:h-20 object-contain mx-6 md:mx-10"
                            />
                        ))}
                    </div>
                    <div className="inline-block animate-marquee-teams">
                        {teams.map((team, index) => (
                            <img
                                key={index}
                                src={team.src}
                                alt={team.name}
                                className="inline-block h-16 md:h-20 object-contain mx-6 md:mx-10"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorSlider;