import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Construction_module/Dashboard';
import Details_Page from './Rent_module/PropertyList/Details_Page';
import Vendor_Registration from './Forms_module/Vendor_Registration';
import Property_Map from './Buy_module/Property_Map';
import Saved_Buy from './Buy_module/Savedbuy';
import Constructions from './Construction_module/Constructions'
import Interiors from './Construction_module/Interiors-Our-Services'
import ExploreConstructionResources from './Construction_module/ExploreConstructionResources'
import PostYourBestDeal from './Forms_module/Form-PostYourBestDeal';
import LeaseForm from './Forms_module/Form-Lease';
import SellYourProperty from './Forms_module/Form-SellYourProperty';
import Lease_map from './Lease_module/Lease_map';
import Lease_detail from './Lease_module/Lease_details';


import RentForm from './Forms_module/Rent_form';
import InteriorConsultationForm from './Construction_module/Get_started';
import Footer from './hemanth/Hemanth';
import Vendorsample from './hemanth/VendorForm';
import Vendorsampledata from './hemanth/Vendordata';
import TwodPlansInterior from './Construction_module/TwodPlansInterior';
import ThreedPlansInterior from './Construction_module/ThreedPlansInterior';
import Elevations from './Construction_module/Elevations';
import Packages from './Construction_module/Packages'
import HowItWorks from './Construction_module/HowItWorks'
import Lease_discription from './Lease_module/Lease_description';

import Rent_Property_Map from './Rent_module/Rent_Propertymap';


import Rent_description from './Rent_module/Discription/Rent_description';
import Forms from './Forms_module/Forms';
import LeaseSave from './Lease_module/LeaseSave';
import RentSaves from './Rent_module/Rent_Saves';
import Login from './auth/Login';
import Register from './auth/Register';
import HomeService from "./Worker_module/HomeService";
import WorkerDetails from "./Worker_module/WorkerDetails";
import InboxList from "./Worker_module/InboxList";
import WorkerDetail from "./Worker_module/WorkerDetail";




import Buy_Property_Map from './Buy_module/Buy_Propertymap';
import Buy_description from './Buy_module/Buy_description';
import Buy_Details_Page from './Buy_module/Details_Page';
import BuySaves from './Buy_module/Buy_Saves';
import Buy_Postdeal from './Buy_module/Buy_Postdeal';
import Buy_Posttable from './Buy_module/Buy_Posttable'



import AdminLogin from './Components/Admin/Login/Login';
import AdminDashboard from './Components/Admin/Dashboard/Dashboard';
import AdminUploadProperties from './Components/Admin/AdminUploadedProperties/AdminUploadProperties';
import AdminTwoDPlans from './Components/Admin/TwoDPlans/TwoDPlans';
import AdminThreeDPlans from './Components/Admin/ThreeDPlans/ThreeDPlans';
import AdminPackages from './Components/Admin/Packages/Pakages';
import AdminExploresConstructions from './Components/Admin/ExploresConstruction/ExploresConstruction';
import AdminElevation from './Components/Admin/Elevations/Elevations';
import AdminCustomers from './Components/Admin/Customers/Customers';
import AdminBestDeals from './Components/Admin/BestDeals/BestDeals';
import FormsBottomNavbar from './Forms_module/FormsBottomNavbar';
import SampleBottomNavbar from './Lease_module/SampleButtomNavbar';


function App() {


  return (
    <BrowserRouter>
      <Routes>
      {/* Auth routes */}
      {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        
      <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />

         <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        /> */}
              <Route path="/" element={<Login />} />
     <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Tharun */}
        <Route path="/home-service" element={<HomeService />} />
        <Route path="/work-details" element={<WorkerDetails />} />
        <Route path="/inboxlist" element={<InboxList />} />
        <Route path="/work-detail" element={<WorkerDetail />} />


        <Route path="/post" element={<Forms/>} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/postyourbestdeal-form" element={<PostYourBestDeal />} />
        <Route path="/lease-form" element={<LeaseForm />} />
        <Route path="/sellyourproperty-form" element={<SellYourProperty />} />
        <Route path="/vendor-form" element={<Vendor_Registration />} />
        <Route path="/propertymap" element={<Property_Map />} />
        <Route path="/Savedbuy" element={<Saved_Buy />} />
        <Route path="/constructions" element={<Constructions />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/explore-construction-resources" element={<ExploreConstructionResources />} />
        <Route path="/two-d-plane-interior" element={<TwodPlansInterior />} />
        <Route path="/three-d-plane-interior" element={<ThreedPlansInterior />} />
        <Route path="/elevations" element={<Elevations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/how-it-works" element={<HowItWorks />} />



        <Route path="/lease_map" element={<Lease_map />} />
        <Route path="/lease_details" element={<Lease_detail />} />
        <Route path="/lease_description/:id" element={<Lease_discription />} />
        <Route path="/lease_description" element={<Lease_discription />} />
        <Route path="/lease-description" element={<Lease_discription />} />
        <Route path="/lease_save" element={<LeaseSave />} />
        <Route path="/lease_nav" element={< FormsBottomNavbar />} />
        <Route path="/lease_sampleNavbar" element={< SampleBottomNavbar />} />
       
        
        <Route path="/rent-form" element={<RentForm />} />
        <Route path="/get-started" element={<InteriorConsultationForm />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/samplevendor" element={<Vendorsample />} />
        <Route path="/samplevendordata" element={<Vendorsampledata/>} />
        <Route path="/rent-description" element={<Rent_description/>} />
        <Route path="/rent-propertymap" element={<Rent_Property_Map/>} />
        <Route path="/rent-saves" element={<RentSaves/>} />


        //Buy
        <Route path="/Buy-propertymap" element={<Buy_Property_Map/>} />
        <Route path="/Buy-description" element={<Buy_description/>} />
        <Route path="/Buy-details" element={<Buy_Details_Page />} />
        <Route path="/Buy-saves" element={<BuySaves/>} />
        <Route path="/Buy-Postdeal" element={<Buy_Postdeal/>} />
        <Route path="/Buy-Posttable" element={<Buy_Posttable/>} />
       



//AdminDashboard
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/adminuploadproperties" element={<AdminUploadProperties />} />
        <Route path="/admin-2dplans" element={<AdminTwoDPlans />} />
        <Route path="/admin-3dplans" element={<AdminThreeDPlans />} />
        <Route path="/admin-packages" element={<AdminPackages />} />
        <Route path="/admin-explore-constructions" element={<AdminExploresConstructions />} />
        <Route path="/admin-elevation" element={<AdminElevation />} />
        <Route path="/admin-customers" element={<AdminCustomers />} />
        <Route path="/admin-bestdeals" element={<AdminBestDeals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
