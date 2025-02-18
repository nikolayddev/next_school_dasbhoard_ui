import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

export default function AdminPage() {
    return (
        <div className='p-4 flex flex-col gap-4 md:flex-row'>
            {/* Left */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/* User cards */}
                <div className='flex gap-4 justify-between flex-wrap'>
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
                {/* Middle charts */}
                <div className='flex gap-4 flex-col lg:flex-row'>
                    {/* Count chart */}
                    <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChart />
                    </div>
                    {/* Attendance chart */}
                    <div className='w-full lg:w-2/3 h-[450px]'></div>
                </div>
                {/* Bottom chart */}
                
            </div>
            {/* Right */}
            <div className='w-full lg:w-1/3'>Right</div>
        </div>
    );
}