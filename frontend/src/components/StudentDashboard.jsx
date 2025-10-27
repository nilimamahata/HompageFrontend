import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('Class 10');

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("auth")) || "";
    const userType = localStorage.getItem('userType');
    if (token === "" || userType !== 'student') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('userType');
    navigate('/login');
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  return (
    <div className="student-dashboard">
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="top-navbar-left">
          <div className="profile-info">
            <div className="profile-avatar">S</div>
            <span>Student Name</span>
          </div>
          <div className="class-dropdown">
            <select value={selectedClass} onChange={handleClassChange}>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>
        </div>
        <div className="top-navbar-right">
          <span className="nav-icon">🔔</span>
          <span className="nav-icon">&#9881;</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Dashboard Body */}
      <div className="dashboard-body">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <ul className="sidebar-nav">
            <li><a href="#dashboard"><span className="sidebar-icon">🏠</span> Dashboard</a></li>
            <li><a href="#courses"><span className="sidebar-icon">📚</span> My Courses</a></li>
            <li><a href="#assignments"><span className="sidebar-icon">📝</span> Assignments</a></li>
            <li><a href="#grades"><span className="sidebar-icon">📊</span> Grades</a></li>
            <li><a href="#schedule"><span className="sidebar-icon">📅</span> Schedule</a></li>
            <li><a href="#resources"><span className="sidebar-icon">📁</span> Resources</a></li>
            <li><a href="#messages"><span className="sidebar-icon">💬</span> Messages</a></li>
          </ul>
        </aside>

        {/* Main Dashboard */}
        <main className="main-dashboard">
          <div className="dashboard-content">
            {/* Welcome Banner */}
            <div className="welcome-banner">
              <h1>Good Morning, Student!</h1>
              <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</p>
              <div className="profile-progress">
                <span>Profile 80% complete</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            {/* Progress Summary Cards */}
            <div className="progress-summary">
              <h3>Subject Progress</h3>
              <div className="progress-cards">
                <div className="progress-card">
                  <h4>Mathematics</h4>
                  <div className="circular-progress">
                    <div className="progress-circle" style={{ '--percentage': '85' }}>
                      <span>85%</span>
                    </div>
                  </div>
                  <p>Average: 88%</p>
                  <button>Continue Lesson</button>
                </div>
                <div className="progress-card">
                  <h4>Science</h4>
                  <div className="circular-progress">
                    <div className="progress-circle" style={{ '--percentage': '72' }}>
                      <span>72%</span>
                    </div>
                  </div>
                  <p>Average: 75%</p>
                  <button>Continue Lesson</button>
                </div>
                <div className="progress-card">
                  <h4>English</h4>
                  <div className="circular-progress">
                    <div className="progress-circle" style={{ '--percentage': '90' }}>
                      <span>90%</span>
                    </div>
                  </div>
                  <p>Average: 92%</p>
                  <button>Continue Lesson</button>
                </div>
                <div className="progress-card">
                  <h4>Social Studies</h4>
                  <div className="circular-progress">
                    <div className="progress-circle" style={{ '--percentage': '78' }}>
                      <span>78%</span>
                    </div>
                  </div>
                  <p>Average: 80%</p>
                  <button>Continue Lesson</button>
                </div>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="panel upcoming-classes">
              <h3>Upcoming Classes</h3>
              <ul>
                <li>
                  <span>Physics Live Class — 10:00 AM</span>
                  <button>Join via Google Meet</button>
                </li>
                <li>
                  <span>English Recorded Class — Watch Anytime</span>
                  <button>View in Calendar</button>
                </li>
                <li>
                  <span>Mathematics Live Class — 2:00 PM</span>
                  <button>Join via Jitsi</button>
                </li>
              </ul>
            </div>

            {/* Assignments Due */}
            <div className="panel assignments-due">
              <h3>Assignments Due</h3>
              <table className="assignments-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Subject</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Algebra Homework</td>
                    <td>Mathematics</td>
                    <td>2023-10-15</td>
                    <td className="status pending">Pending</td>
                    <td><button>Upload Submission</button></td>
                  </tr>
                  <tr>
                    <td>Physics Lab Report</td>
                    <td>Science</td>
                    <td>2023-10-16</td>
                    <td className="status submitted">Submitted</td>
                    <td><button>View Submission</button></td>
                  </tr>
                  <tr>
                    <td>Essay on Literature</td>
                    <td>English</td>
                    <td>2023-10-18</td>
                    <td className="status graded">Graded</td>
                    <td><button>View Submission</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recent Activity */}
            <div className="panel recent-activities">
              <h3>Recent Activity</h3>
              <div className="activity-timeline">
                <div className="activity-item">
                  <div className="activity-icon">✓</div>
                  <div className="activity-content">
                    <p>Completed "Trigonometry Test"</p>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📤</div>
                  <div className="activity-content">
                    <p>Uploaded "History Assignment"</p>
                    <span>1 day ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">▶️</div>
                  <div className="activity-content">
                    <p>Watched "Photosynthesis Lecture"</p>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="right-sidebar">
            <div className="quick-access">
              <h3>Quick Access</h3>
              <ul>
                <li><a href="#calendar"><span className="quick-icon">📅</span> Calendar</a></li>
                <li><a href="#timetable"><span className="quick-icon">⏰</span> Timetable</a></li>
                <li><a href="#library"><span className="quick-icon">📖</span> Library</a></li>
                <li><a href="#support"><span className="quick-icon">🆘</span> Support</a></li>
                <li><a href="#feedback"><span className="quick-icon">💬</span> Feedback</a></li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
