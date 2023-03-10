import React, { Suspense, lazy, Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./utility/context/Layout";
import { AuthComponent } from "Mix/AuthComponent";
import Loading from "Mix/Loading";
import Redirec from "views/pages/Redirect/Redirect";



const AdminPage = lazy(() => import("views/pages/admins/AdminsPage"));
const ViewAdminPage = lazy(() =>import("views/pages/admins/ViewAdminPage"));
const AddAdminPage = lazy(() =>import("views/pages/admins/AddAdminPage"));
const WareHousePage = lazy(() =>import("views/pages/warehouse/WareHousePage"));
const HomePage = lazy(() => import("./views/pages/home/HomePage"));
const MyAccountPage = lazy(() => import("views/pages/my_account/MyAccount"));
const PrivacyPage = lazy(() =>import("./views/pages/information/privacy/PrivacyPage"));
const AboutUsPage = lazy(() =>import("./views/pages/information/about_us/AboutUsPage"));
const DeliveryMethodPage = lazy(() => import("views/pages/delivery_method/Page"));
const Banner_Page = lazy(() => import("views/pages/Banner/BannerPage"));
const UserPage = lazy(() => import("views/pages/User/Page"));
const CouponPage = lazy(() => import("views/pages/Coupon/CouponPage"));
const SupportedCityPage = lazy(() => import("views/pages/SupportedCity/SupportedCityPage"));

const login = lazy(() => import("./views/pages/authentication/login/Login"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));

const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  auth,
  isPrivate,
  ...rest
}) => {
  const ToRender = () => (
    <Route
      {...rest}
      render={(props) => {
        return (
          <ContextLayout.Consumer>
            {(context) => {
              let LayoutTag =
                fullLayout === true
                  ? context.fullLayout
                  : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout;
              return (
                <LayoutTag {...props} permission={'Super Admin'}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              );
            }}
          </ContextLayout.Consumer>
        );
      }}
    />
  );

  if (isPrivate) {
    return (
      <AuthComponent>
        <ToRender />
      </AuthComponent>
    );
  }
  return <ToRender />;
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
        <AppRoute exact path="/" component={Redirec}  />

          <AppRoute exact path="/dashboard" component={HomePage} isPrivate />
          <AppRoute
            exact
            path="/dashboard/myAccount"
            component={MyAccountPage}
            isPrivate
          />
         
         <AppRoute
            exact
            path="/dashboard/admin"
            component={AdminPage}
            isPrivate
          />
         
             <AppRoute
            exact
            path="/dashboard/admin/add"
            component={AddAdminPage}
            isPrivate
          />
           <AppRoute
            exact
            path="/dashboard/admin/:id"
            component={ViewAdminPage}
            isPrivate
          />
          <AppRoute
            exact
            path="/dashboard/warehouse"
            component={WareHousePage}
            isPrivate
          />
            <AppRoute
            exact
            path="/dashboard/banner"
            component={Banner_Page}
            isPrivate
          />
              <AppRoute
            exact
            path="/dashboard/delivery_method"
            component={DeliveryMethodPage }
            isPrivate
          />
                 <AppRoute
            exact
            path="/dashboard/coupon"
            component={CouponPage }
            isPrivate
          />
                 <AppRoute
            exact
            path="/supportedcity"
            component={SupportedCityPage }
            isPrivate
          />
               <AppRoute
            exact
            path="/dashboard/user"
            component={UserPage }
            isPrivate
          />
       
            <AppRoute
            exact
            path="/dashboard/information/privacy"
            component={PrivacyPage}
            isPrivate
          />
          <AppRoute
            exact
            path="/dashboard/information/about-us"
            component={AboutUsPage}
            isPrivate
          />
        <AppRoute
            exact
            path="/dashboard/loading"
            component={Loading}
            isPrivate
          />
         
      
          <AppRoute path="/dashboard/login" component={login} fullLayout />
          <AppRoute
            path="/dashboard/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
