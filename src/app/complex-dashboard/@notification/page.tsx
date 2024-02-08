import Link from "next/link";

export default function complexDashboard() {
    return (
      <div>
        <h1>
          Notifications from complex dashboard
          
        </h1>
        <Link className="text-violet-700" href="/complex-dashboard/archived">Archived</Link>
      </div>
    )
  }