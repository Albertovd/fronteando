// ** Import from react dom
import { Route, Routes, Navigate } from 'react-router-dom';

// ** Import core SCSS styles
import 'assets/scss/theme.scss';

// ** Import Layouts
import DashboardIndex from 'layouts/dashboard/DashboardIndex';
import AuthLayout from 'layouts/dashboard/AuthLayout';
import HelpCenterLayout from 'layouts/marketing/HelpCenterLayout'; // ( added in v1.3.0 )
import DashboardIndexCompact from 'layouts/dashboard/DashboardIndexCompact'; // ( added in v1.3.0 )
import DashboardIndexTop from 'layouts/dashboard/DashboardIndexTop'; // ( added in v1.3.0 )
import JobListingLayout from 'layouts/marketing/JobListingLayout'; // ( added in v2.0.0 )
import TaskKanbanLayout from './dashboard/TaskKanbanLayout'; // ( added in v2.0.0 )
import HelpCenterTransparentLayout from 'layouts/marketing/HelpCenterTransparentLayout'; // ( added in v2.0.0 )
import EcommerceLayout from './dashboard/EcommerceLayout'; // ( added in v2.2.0 )

// ** Import Dahbaord Menu Pages
import Overview from 'components/dashboard/overview/Overview';

// ** Import Courses Pages
import AllCourses from 'components/dashboard/courses/all-courses/AllCourses';
import CoursesCategory from 'components/dashboard/courses/CoursesCategory';
import CategorySingle from 'components/dashboard/courses/CategorySingle';

// ** Import Users Pages
import Instructor from 'components/dashboard/user/Instructor';
import Students from 'components/dashboard/user/Students';

// ** Import CMS Pages
import CMSDashboard from 'components/dashboard/cms/CMSDashboard';
import AllPosts from 'components/dashboard/cms/all-posts/AllPosts';
import AddNewPost from 'components/dashboard/cms/AddNewPost';
import Category from 'components/dashboard/cms/Category';

// ** Import Authentication components
import SignIn from 'components/dashboard/authentication/SignIn';
import SignUp from 'components/dashboard/authentication/SignUp';
import ForgetPassword from 'components/dashboard/authentication/ForgetPassword';
import Notifications from 'components/dashboard/authentication/Notifications';












// ** Boostrap Forms components
import ChecksRadios from 'components/elements/bootstrap/forms/ChecksRadios';
import FloatingLabels from 'components/elements/bootstrap/forms/FloatingLabels';
import FormControls from 'components/elements/bootstrap/forms/FormControls';
import FormText from 'components/elements/bootstrap/forms/FormText';
import BSInputGroup from 'components/elements/bootstrap/forms/BSInputGroup';
import Layouts from 'components/elements/bootstrap/forms/Layouts';
import Range from 'components/elements/bootstrap/forms/Range';
import BSSelect from 'components/elements/bootstrap/forms/BSSelect';
import Validation from 'components/elements/bootstrap/forms/Validation';

// ** Boostrap components
import Accordions from 'components/elements/bootstrap/Accordions';
import Alerts from 'components/elements/bootstrap/Alerts';
import AvatarStyles from 'components/elements/bootstrap/AvatarStyles';
import Badges from 'components/elements/bootstrap/Badges';
import Breadcrumbs from 'components/elements/bootstrap/Breadcrumbs';
import Buttons from 'components/elements/bootstrap/Buttons';
import ButtonGroup from 'components/elements/bootstrap/ButtonGroup';
import Cards from 'components/elements/bootstrap/Cards';
import Carousels from 'components/elements/bootstrap/Carousels';
import CloseButtons from 'components/elements/bootstrap/CloseButtons';
import Collapses from 'components/elements/bootstrap/Collapses';
import Dropdowns from 'components/elements/bootstrap/Dropdowns';
import Listgroups from 'components/elements/bootstrap/Listgroups';
import Navbars from 'components/elements/bootstrap/Navbars';
import Navs from 'components/elements/bootstrap/Navs';
import BSOffcanvas from 'components/elements/bootstrap/BSOffcanvas';
import Overlays from 'components/elements/bootstrap/Overlays';
import Paginations from 'components/elements/bootstrap/Paginations';
import Popovers from 'components/elements/bootstrap/Popovers';
import Progress from 'components/elements/bootstrap/Progress';
import Spinners from 'components/elements/bootstrap/Spinners';
import Modals from 'components/elements/bootstrap/Modals';
import Tables from 'components/elements/bootstrap/Tables';
import Toasts from 'components/elements/bootstrap/Toasts';
import Tooltips from 'components/elements/bootstrap/Tooltips';

// ** Import docs and change log pages
import Documentation from 'components/dashboard/documentation/Documentation';
import ChangeLog from 'components/dashboard/changelog/ChangeLog';

/* ----------------------------------- */
/* IMPORTS FOR MARKETING PAGES - START */
import DefaultLayout from 'layouts/marketing/DefaultLayout';
import LayoutFooterLinks from 'layouts/marketing/LayoutFooterLinks';
import BlankLayout from 'layouts/marketing/BlankLayout';
import NotFound from 'layouts/marketing/NotFound';
import AcademyLayout from 'layouts/marketing/AcademyLayout'; // added in 2.0.0
import CourseIndex from 'components/marketing/pages/courses/course-index/CourseIndex';
import CourseCategory from 'components/marketing/pages/courses/course-category/CourseCategory';

/* IMPORTS FOR FRONT SIDE PAGES MENU */
import CourseSingle from 'components/marketing/pages/courses/course-single/CourseSingle';
import CourseCheckout from 'components/marketing/pages/courses/course-checkout/CourseCheckout';
import AddNewCourse from 'components/marketing/pages/courses/add-new-course/AddNewCourse';
import CoursePath from 'components/marketing/pages/courses/course-path/CoursePath';
import CoursePathSingle from 'components/marketing/pages/courses/course-path-single/CoursePathSingle';
import Contact from 'components/marketing/pages/contact/Contact'; // new v1.1.0





/* IMPORTS FOR FRONT SPECIALTY SUBMENU  ROUTERS */
import ComingSoon from 'components/marketing/pages/specialty/ComingSoon';
import Error404 from 'components/marketing/pages/specialty/Error404';
import MaintenanceMode from 'components/marketing/pages/specialty/MaintenanceMode';
import TermsAndConditions from 'components/marketing/pages/specialty/TermsAndConditions';

// Landing menu item pages
import LandingCourses from 'components/marketing/landings/landing-courses/LandingCourses';

// Instructor Dashboard Pages
import InstructorDashboard from 'components/marketing/instructor/Dashboard';
import InstructorMyCourses from 'components/marketing/instructor/MyCourses';
import InstructorReviews from 'components/marketing/instructor/Reviews';
import Earnings from 'components/marketing/instructor/Earnings';
import InstructorOrders from 'components/marketing/instructor/Orders';
import InstructorStudents from 'components/marketing/instructor/Students';
import ViewProfile from 'components/marketing/instructor/ViewProfile';

// Instructor New Dashboard Pages for Quiz ( v2.0.0)
import InstructorQuiz from 'components/marketing/instructor/Quiz';
import InstructorQuizSingle from 'components/marketing/instructor/QuizSingle';
import InstructorQuizResult from 'components/marketing/instructor/QuizResult';

// Student Dashboard Pages
import StudentDashboard from 'components/marketing/student/Dashboard';
import DeleteProfile from 'components/marketing/account-settings/DeleteProfile';
import EditProfile from 'components/marketing/account-settings/EditProfile';
import LinkedAccounts from 'components/marketing/account-settings/LinkedAccounts';
import AccountNotifications from 'components/marketing/account-settings/Notifications';
import StudentPayment from 'components/marketing/account-settings/Payment';
import ProfilePrivacy from 'components/marketing/account-settings/ProfilePrivacy';
import Security from 'components/marketing/account-settings/Security';
import SocialProfiles from 'components/marketing/account-settings/SocialProfiles';
import Subscriptions from 'components/marketing/account-settings/Subscriptions';

// Student New Dashboard Pages for Quiz ( v2.0.0)
import StudentQuiz from 'components/marketing/student/Quiz';
import StudentQuizStart from 'components/marketing/student/quiz-start/QuizStart';
import StudentQuizAttempt from 'components/marketing/student/QuizAttempt';
import StudentQuizResult from 'components/marketing/student/QuizResult';

// Account Settings
import BillingInfo from 'components/marketing/account-settings/BillingInfo';
import Payouts from 'components/marketing/account-settings/Payouts';
import Invoice from 'components/marketing/account-settings/Invoice';
import InvoiceDetails from 'components/marketing/account-settings/InvoiceDetails';



const AllRoutes = () => {
	return (
		<Routes>
			{/* Routes with DefaultLayout */}
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<LandingCourses />} />
				<Route
					path="/marketing/course-category/"
					element={<CourseCategory />}
				/>
				<Route
					path="/marketing/courses/course-checkout/"
					element={<CourseCheckout />}
				/>
				<Route
					path="/marketing/instructor/add-new-course/"
					element={<AddNewCourse />}
				/>
				<Route
					path="/marketing/courses/course-path/"
					element={<CoursePath />}
				/>
				<Route
					path="/marketing/courses/course-path-single/"
					element={<CoursePathSingle />}
				/>
				<Route
					path="/marketing/courses/course-single/"
					element={<CourseSingle />}
				/>
				<Route
					path="/marketing/instructor/dashboard/"
					element={<InstructorDashboard />}
				/>
				<Route
					path="/marketing/instructor/instructor-my-courses/"
					element={<InstructorMyCourses />}
				/>
				<Route
					path="/marketing/instructor/instructor-reviews/"
					element={<InstructorReviews />}
				/>
				<Route
					path="/marketing/instructor/instructor-earnings/"
					element={<Earnings />}
				/>
				<Route
					path="/marketing/instructor/instructor-orders/"
					element={<InstructorOrders />}
				/>
				<Route
					path="/marketing/instructor/instructor-students/"
					element={<InstructorStudents />}
				/>
				<Route
					path="/marketing/instructor/instructor-payouts/"
					element={<Payouts />}
				/>
				<Route
					path="/marketing/instructor/instructor-edit-profile/"
					element={<EditProfile />}
				/>
				<Route
					path="/marketing/instructor/instructor-profile/"
					element={<ViewProfile />}
				/>
				<Route
					path="/marketing/instructor/instructor-security/"
					element={<Security />}
				/>
				<Route
					path="/marketing/instructor/instructor-social-profiles/"
					element={<SocialProfiles />}
				/>
				<Route
					path="/marketing/instructor/instructor-notifications/"
					element={<AccountNotifications />}
				/>
				<Route
					path="/marketing/instructor/instructor-profile-privacy/"
					element={<ProfilePrivacy />}
				/>
				<Route
					path="/marketing/instructor/instructor-delete-profile/"
					element={<DeleteProfile />}
				/>
				<Route
					path="/marketing/instructor/quiz/"
					element={<InstructorQuiz />}
				/>
				<Route
					path="/marketing/instructor/quiz/single/"
					element={<InstructorQuizSingle />}
				/>
				<Route
					path="/marketing/instructor/quiz/result/"
					element={<InstructorQuizResult />}
				/>
				<Route
					path="/marketing/student/dashboard/"
					element={<StudentDashboard />}
				/>
				<Route
					path="/marketing/student/student-subscriptions/"
					element={<Subscriptions />}
				/>
				<Route
					path="/marketing/student/student-billing-info/"
					element={<BillingInfo />}
				/>
				<Route
					path="/marketing/student/student-payment/"
					element={<StudentPayment />}
				/>
				<Route
					path="/marketing/student/student-invoice/"
					element={<Invoice />}
				/>
				<Route
					path="/marketing/student/student-invoice-details/"
					element={<InvoiceDetails />}
				/>
				<Route
					path="/marketing/student/student-edit-profile/"
					element={<EditProfile />} /*------> Necesitamos cambiar esto*/
				/>
				<Route
					path="/marketing/student/student-security/"
					element={<Security />}
				/>
				<Route
					path="/marketing/student/student-social-profiles/"
					element={<SocialProfiles />}
				/>
				<Route
					path="/marketing/student/student-notifications/"
					element={<AccountNotifications />}
				/>
				<Route
					path="/marketing/student/student-profile-privacy/"
					element={<ProfilePrivacy />}
				/>
				<Route
					path="/marketing/student/student-delete-profile/"
					element={<DeleteProfile />}
				/>
				<Route
					path="/marketing/student/student-linked-accounts/"
					element={<LinkedAccounts />}
				/>
				<Route path="/marketing/student/quiz/" element={<StudentQuiz />} />
				<Route
					path="/marketing/student/quiz/attempt/"
					element={<StudentQuizAttempt />}
				/>
				<Route
					path="/marketing/student/quiz/start/"
					element={<StudentQuizStart />}
				/>
				<Route
					path="/marketing/student/quiz/result/"
					element={<StudentQuizResult />}
				/>
			</Route>

			{/* Routes with BlankLayout */}
			<Route element={<BlankLayout />}>
				<Route
					path="/marketing/landings/landing-courses/"
					element={<LandingCourses />}
				/>

				<Route path="/marketing/pages/contact/" element={<Contact />} />
				<Route
					path="/marketing/specialty/terms-and-conditions/"
					element={<TermsAndConditions />}
				/>
			</Route>

			{/* Routes with NotFound */}
			<Route element={<NotFound />}>
				<Route
					path="/marketing/specialty/coming-soon/"
					element={<ComingSoon />}
				/>
				<Route path="/marketing/specialty/404-error/" element={<Error404 />} />
				<Route
					path="/marketing/specialty/maintenance-mode/"
					element={<MaintenanceMode />}
				/>
			</Route>





			{/* Routes with AcademyLayout */}
			<Route element={<AcademyLayout />}>

			</Route>


			{/* Routes with AuthLayout */}
			<Route element={<AuthLayout />}>
				<Route path="/authentication/sign-in" element={<SignIn />} />
				<Route path="/authentication/sign-up" element={<SignUp />} />
				<Route
					path="/authentication/forget-password"
					element={<ForgetPassword />}
				/>
			</Route>

			{/* Routes (DASHBOARD ROUTERS) with DashboardIndex */}
			<Route element={<DashboardIndex />}>
				<Route path="/dashboard/overview" element={<Overview />} />
				<Route path="/courses/all-courses" element={<AllCourses />} />
				<Route path="/courses/courses-category" element={<CoursesCategory />} />
				<Route path="/courses/category-single" element={<CategorySingle />} />
				<Route path="/user/instructor" element={<Instructor />} />
				<Route path="/user/students" element={<Students />} />
				<Route path="/cms/cms-dashboard" element={<CMSDashboard />} />
				<Route path="/cms/all-posts" element={<AllPosts />} />
				<Route path="/cms/add-new-post" element={<AddNewPost />} />
				<Route path="/cms/category" element={<Category />} />
				<Route
					path="/authentication/notifications"
					element={<Notifications />}
				/>
				<Route
					path="/dashboard/layouts/layout-vertical"
					element={<Overview />}
				/>

				{/* REACT-BOOTSTRAP FORMS COMPOENTS ROUTERS */}
				<Route
					path="/elements/forms/checks-and-radios"
					element={<ChecksRadios />}
				/>
				<Route
					path="/elements/forms/floating-labels"
					element={<FloatingLabels />}
				/>
				<Route
					path="/elements/forms/form-controls"
					element={<FormControls />}
				/>
				<Route path="/elements/forms/form-text" element={<FormText />} />
				<Route path="/elements/forms/input-group" element={<BSInputGroup />} />
				<Route path="/elements/forms/layouts" element={<Layouts />} />
				<Route path="/elements/forms/range" element={<Range />} />
				<Route path="/elements/forms/select" element={<BSSelect />} />
				<Route path="/elements/forms/validation" element={<Validation />} />

				{/* REACT-BOOTSTRAP COMPOENTS ROUTERS */}
				<Route path="/elements/accordions" element={<Accordions />} />
				<Route path="/elements/alerts" element={<Alerts />} />
				<Route path="/elements/avatar" element={<AvatarStyles />} />
				<Route path="/elements/badges" element={<Badges />} />
				<Route path="/elements/breadcrumbs" element={<Breadcrumbs />} />
				<Route path="/elements/buttons" element={<Buttons />} />
				<Route path="/elements/button-group" element={<ButtonGroup />} />
				<Route path="/elements/cards" element={<Cards />} />
				<Route path="/elements/carousels" element={<Carousels />} />
				<Route path="/elements/close-button" element={<CloseButtons />} />
				<Route path="/elements/collapse" element={<Collapses />} />
				<Route path="/elements/dropdowns" element={<Dropdowns />} />
				<Route path="/elements/list-group" element={<Listgroups />} />
				<Route path="/elements/modal" element={<Modals />} />
				<Route path="/elements/navs" element={<Navs />} />
				<Route path="/elements/offcanvas" element={<BSOffcanvas />} />
				<Route path="/elements/overlays" element={<Overlays />} />
				<Route path="/elements/navbar" element={<Navbars />} />
				<Route path="/elements/pagination" element={<Paginations />} />
				<Route path="/elements/popovers" element={<Popovers />} />
				<Route path="/elements/progress" element={<Progress />} />
				<Route path="/elements/spinners" element={<Spinners />} />
				<Route path="/elements/tables" element={<Tables />} />
				<Route path="/elements/toasts" element={<Toasts />} />
				<Route path="/elements/tooltips" element={<Tooltips />} />
				<Route path="/dashboard/documentation" element={<Documentation />} />
				<Route path="/dashboard/changelog" element={<ChangeLog />} />




			</Route>

			





			{/* Routes with DashboardIndexTop */}
			<Route element={<DashboardIndexTop />}>
				<Route
					path="/dashboard/layouts/layout-horizontal"
					element={<Overview />}
				/>
			</Route>

			{/* Routes with DashboardIndexCompact */}
			<Route element={<DashboardIndexCompact />}>
				<Route
					path="/dashboard/layouts/layout-compact"
					element={<Overview />}
				/>
			</Route>

			{/*Redirect*/}
			<Route
				path="*"
				element={<Navigate to="/marketing/specialty/404-error/" replace />}
			/>
		</Routes>
	);
};

export default AllRoutes;
