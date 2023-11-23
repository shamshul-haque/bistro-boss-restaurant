import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { user, loader } = useAuth();
  const { isAdmin, isPending } = useAdmin();
  const location = useLocation();

  if (loader || isPending) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location?.pathname }} replace />;
};

AdminRoutes.propTypes = {
  children: PropTypes.node,
};

export default AdminRoutes;
