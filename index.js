import React, { useContext, useEffect } from "react";
import ProtectedRoute from "./privateRoutes";
/// React router dom
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
/// Dashboard
import Home from "./components/Dashboard/Home";



/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";


//Redux
import Todo from "./pages/Todo";

/// Pages
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import ScrollToTop from "./pages/ScrollToTop";
import { ThemeContext } from "../context/ThemeContext";

//Universal Search

import UniversalSearch from "./components/UniversalSearch/UniversalSearch.js";

//users
import User from "./components/User/User";
import UserAdd from "./components/User/UserAdd";
import UserPending from "./components/User/UserPending";
import ChangePassword from "./components/User/ChangePassword";
import ChangePasswordByOtp from "./components/User/ChangePasswordByOtp";



//Locations
import Location from './components/Location/Location'
import InactiveLocation from './components/Location/InactiveLocation'
import LocationAdd from './components/Location/LocationAdd'


//Master List
import MasterList from './components/MasterList/MasterList'
import MasterListAdd from './components/MasterList/MasterListAdd'
import MasterListBulk from './components/MasterList/MasterListBulk'
import MasterListCat from './components/MasterList/MasterCat'
import MasterListSubCat from './components/MasterList/MasterSubCat.js'
import MasterListUnit from './components/MasterList/MasterUnit'

// unitConversion
import UnitConversion from './components/UnitConversion/ConversionUnit.js'
// Asset

import AssetList from './components/AssetManagement/AssetList.js'
import AddAsset from './components/AssetManagement/AddAssset.js'
import AddAccessories from './components/AssetManagement/AssignAccessories.js'
import AccessoriesList from './components/AssetManagement/AccessoriesList.js'
import AssestTransfer from './components/AssetManagement/AssestTransfer.js'


//Inventory 
import MasterListinv from './components/Inventory/MasterListinv';
import InventoryList from './components/Inventory/InventoryList';
import InventoryCriticalList from './components/Inventory/InventoryCriticalList.js';

//Accounts & Billing & Dirctor apporvals

import AccountModule from './components/Accounts/Accounts.js';
import BillingModule from './components/Accounts/BillingTeam.js';
import DirectorModule from './components/Accounts/DirectorApprovalBilling.js';
import PoModule from './components/Accounts/PoApprovalBilling.js';
import AllPoPaymentDeatils from './components/Accounts/AllPoPaymentDeatils.js';

//Requisition

import RequisitionItemsAdd from './components/Requisition/RequisitionItemAdd';
import NewRequisitionItemsAdd from './components/Requisition/NewRequisitionItemAdd.js';
import RequisitionPendingApproval from "./components/Requisition/PendingApproval";
import RequisitionRejectedItem from "./components/Requisition/RejectedApproval";
import Orders from "./components/Orders/Orders";
import LocalOrders from "./components/Orders/LocalOrders.js";
import OpenMrvs from "./components/Orders/OpenMrvs.js";
import PendingOrder from "./components/Orders/PendingOrders.js"
import DieselOrders from "./components/Orders/DieselOrders.js";
import DieselItemsAdd from './components/DieselItem/DiselItemAdd.js';
import DeselePendingApproval from './components/DieselItem/DiselePendingApproval.js'
import MoveToTransfer from "./components/Requisition/TransferRequest.js";

import DeseleSuperPendingApproval from './components/DieselItem/DiseleSuperAdminApproval';
import RequestionPendingOrders from './components/Requisition/RequsitionOrder.js';
import RequestionPendingByBoss from './components/Requisition/SuperBossPendingApproval.js';
import RevisedSuperAdmin from './components/Requisition/RevisedSuperAdmin.js';

//MIV
import Mivadd from "./components/Miv/AddMivUsedItem";
import NewMivadd from "./components/Miv/NewAddMivUsedItem.js";
import Mivpendingapproval from './components/Miv/PendingApproval';
import MivOrders from './components/Miv/MivOrders.js';
import MivRequestRejected from './components/Miv/RejectedApproval'

//transfer
import AddTransferItem from "./components/Transfer/AddTransferItem";
import PendingTransferApproval from "./components/Transfer/PendingTransferApproval.js";
import TransferOrder from "./components/TransferOrder/TransferOrder.js";
import RejectedTransfer from "./components/Transfer/RejectedTransfer.js";
import AdminPendingApproval from "./components/Requisition/AdminPendingApproval.js";
import TransferNoStatus from "./components/Transfer/TransferStatus.js";
import TransferStatus from "./components/TransferOrder/PendingOrders.js";


//Fabrication

import Fabrication from './components/fabrication/Fabrication.js';
import FabricationOrder from './components/fabrication/FabricationOrders.js';



//Repair
import NewRepairRequest from './components/Repair/NewRepairRequest.js';
import PendingApprovalAdmin from './components/Repair/PendingApprovalAdmin.js';
import SuperAdminapproval from './components/Repair/SuperAdminapproval.js';
import PoPendingList from './components/Repair/POPendingList.js';
import CheckarRepairList from './components/Repair/CheckkarRepairPoList.js';
import MakerRepairList from './components/Repair/MakerRepairPoList.js';
import SuperAdminRepairList from './components/Repair/SuperAdminPoList.js';
import PrintableReapirOrder from './components/Repair/PrintPDFRepairPO.js';
import RepairOrderWithStatus from './components/Repair/RepairOrderWithStatus.js';
import RepairPartialOrder from './components/Repair/PartialRecivedOrder.js';
import ReapirFullRecivedOrder from './components/Repair/FullRecivedOrder.js';

// repair order

import RepairPoOrders from "./components/RepairRecieved/RepairPoOrders.js";
import RepairLocalOrders from "./components/RepairRecieved/RepairLocalOrder.js";

//Reports
import CastingReport from './components/Reports/CastingReport.js';
import RequisitionReport from './components/Reports/RequistionReport.js';
import RequisitionSummaryReport from './components/Reports/RequestItemSummary.js';
import UsedItemReport from './components/Reports/UsedItemReport.js';
import UsedItemSummaryReport from './components/Reports/GroupBYReport.js';
import TransferReport from './components/Reports/TransferReport.js';
import DirectiveReport from './components/Reports/DirectiveReport.js';
import IndigoStock from './components/Reports/IndigoStock.js';
import FabricationReport from './components/Reports/FabricationReport.js'
import MachineReport from './components/Reports/AttendenceReport.js'
import PoReport from './components/Reports/PoReport.js'
import PoDeatils from './components/Reports/PoDetails.js'

// Vechile
import VehicleAdd from "./components/Vehicle/VehicleAdd.js";
import Vehiclecat from "./components/Vehicle/VechileCat.js";
import Vehicle from "./components/Vehicle/Vehicle.js";
import StoreVehicle from "./components/Vehicle/StoreVehicle.js";
import CheckInOut from "./components/DriverDuty/CheckInOut.js";
import MachineDeatilsWithDriver from "./components/Vehicle/VechileDetailsWithDriver.js";
//new vehcile URL
import AssetVehicleList from "./components/Vehicle/AssetVehicleList.js";

// Digital form

import DigitalForm from "./components/digitalinvoice/GenrateInvoive.js";
import StoreDriver from "./components/DriverDuty/StoreDriver.js";
import RejectionApproval from "./components/Rejection/RejectionApproval.js";
import MachineLogSheet from "./components/digitalinvoice/MachineLogSheet.js";

// Casting

import Casting from "./components/Casting/Casting.js";
import CastingDigitalForm from "./components/Casting/CastingDigital.js";
import RequsitionIamges from "./components/Casting/RequsitionIamges.js";
import RequsitionDownlaod from "./components/Casting/RequsitionDownlaod.js";

//waterDeatils
import AddWaterUsedItems from "./components/Water/AddMivWaterUsedItems.js";

//PO

import AddNewSupplier from "./components/Suppliers/AddSupplier.js";
import SuppliersList from "./components/Suppliers/SuppliersList.js";
import InactiveSuppliersList from "./components/Suppliers/InactiveSupplierList.js";
import PendingPO from "./components/PO/PendingPo.js";
import POList from "./components/PO/POList.js";
import PORecivedOrder from "./components/PO/RecivedOrderPO.js";
import PartialRecivedOrder from "./components/PO/PartialRecivedOrder.js";
import CheckerList from "./components/PO/CheckarPoList.js";
import SuperAdminList from "./components/PO/SuperAdminPoList.js";
import PoStatus from "./components/PO/AllGeneratedPOList.js";
import PrintablePo from "./components/PO/POPrint.js";
import POForBilling from "./components/PO/BillingPO.js";
import POPendingForBilling from './components/PO/PendingBilling.js'

// Quatation
import QuatationApproval from './components/Quatation/QuatationApproval.js'

// supplierRate
import SupplierRateList from './components/Quatation/RateMaster.js'


const Markup = () => {
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.auth.data.user.role); // Assuming userRole is stored in Redux
  useEffect(() => {
    if (userRole === "MachineOperator") {
      navigate("/CheckInOut");
    }
  }, [userRole, navigate]);

  const allroutes = [

    /// Dashboard
    { url: "", component: <Home />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin', 'pochecker', 'billing', 'accounts'] },
    { url: "dashboard", component: <Home />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin', 'pomaker', 'pochecker', 'billing', 'accounts', 'director'] },

    // unviversal search
    { url: "Universal-Search", component: <UniversalSearch />, allowedRoles: ['superAdmin', 'director'] },

    // users
    { url: "user", component: <User />, allowedRoles: ['superAdmin'] },
    { url: "user-list", component: <UserPending />, allowedRoles: ['superAdmin'] },
    { url: "user-add", component: <UserAdd />, allowedRoles: ['superAdmin'] },
    { url: "app-change-Password", component: <ChangePassword />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin', 'poAdmin', 'pomaker'] },
    { url: "app-change-Password-otp", component: <ChangePasswordByOtp />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin', 'poAdmin', 'pomaker'] },



    //location
    { url: "location", component: <Location />, allowedRoles: ['superAdmin'] },
    { url: "location-inactive", component: <InactiveLocation />, allowedRoles: ['superAdmin'] },
    { url: "location-add", component: <LocationAdd />, allowedRoles: ['superAdmin'] },


    //MasterList
    { url: "master-list", component: <MasterList />, allowedRoles: ['superAdmin'] },
    { url: "master-add", component: <MasterListAdd />, allowedRoles: ['superAdmin'] },
    { url: "master-bulk", component: <MasterListBulk />, allowedRoles: ['superAdmin'] },
    { url: "master-cat", component: <MasterListCat />, allowedRoles: ['superAdmin'] },
    { url: "master-unit", component: <MasterListUnit />, allowedRoles: ['superAdmin'] },
    { url: "master-Sub-Cat", component: <MasterListSubCat />, allowedRoles: ['superAdmin'] },


    //AccountModule Procurement-Accounts & billing & director approvals

    { url: "Procurement-Accounts", component: <AccountModule />, allowedRoles: ['accounts', 'pomaker', 'pochecker'] },
    { url: "Bills-Approval", component: <BillingModule />, allowedRoles: ['billing'] },
    { url: "Director-Module", component: <DirectorModule />, allowedRoles: ['director'] },
    { url: "Po-Approval-Module", component: <PoModule />, allowedRoles: ['pochecker'] },
    { url: "All-Po-Payment-Details", component: <AllPoPaymentDeatils />, allowedRoles: ['accounts', 'pomaker', 'pochecker'] },





    //unitConversion
    { url: "Unit-Conversion", component: <UnitConversion />, allowedRoles: ['superAdmin'] },

    //Asset
    { url: "asset-list", component: <AssetList />, allowedRoles: ['superAdmin', 'storeKeeper'] },
    { url: "asset-add", component: <AddAsset />, allowedRoles: ['superAdmin'] },
    { url: "Accessories-add", component: < AddAccessories />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },
    { url: "Accessories-List", component: <AccessoriesList />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },
    { url: "Assest-Transfer", component: <AssestTransfer />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },



    //Inventory
    { url: "master-list-inv", component: <MasterListinv />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "inventory-list", component: <InventoryList />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "inventory-critical-list", component: <InventoryCriticalList />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },


    //Requisition
    { url: "requisition-Item-Add", component: <RequisitionItemsAdd />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "new-requisition-Item-Add", component: <NewRequisitionItemsAdd />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "requsition-pending", component: <RequisitionPendingApproval />, allowedRoles: ['admin', 'superAdmin'] },
    { url: "requsition-rejected", component: <RequisitionRejectedItem />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "requsition-admin-approval", component: <AdminPendingApproval />, allowedRoles: ['admin', 'superAdmin'] },
    { url: "Diesel-Item-Add", component: <DieselItemsAdd />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },
    { url: "Diesel-pending", component: <DeselePendingApproval />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },
    { url: "Requestion-Status", component: <RequestionPendingOrders />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },
    { url: "Move-To-Transfer", component: <MoveToTransfer />, allowedRoles: ['admin', 'superAdmin', 'storeKeeper'] },
    { url: "Revised-Requesition", component: <RevisedSuperAdmin />, allowedRoles: ['superAdmin'] },



    //Fabrication
    { url: "Fabrication", component: <Fabrication />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "FabricationOrder", component: <FabricationOrder />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "Requisition-Pending-By-Boss", component: <RequestionPendingByBoss />, allowedRoles: ['superAdmin', 'director'] },


    // Repair
    { url: "New-Repair-Request", component: <NewRepairRequest />, allowedRoles: ['pomaker', 'pochecker', 'director', 'storeKeeper'] },
    { url: "Pending-Approval-Admin", component: <PendingApprovalAdmin />, allowedRoles: ['admin'] },
    { url: "SuperAdmin-approval", component: <SuperAdminapproval />, allowedRoles: ['pomaker', 'pochecker', 'superAdmin'] },
    { url: "Po-Pending-List", component: <PoPendingList />, allowedRoles: ['pomaker', 'pochecker', 'director'] },
    { url: "Checker-Repair-List", component: <CheckarRepairList />, allowedRoles: ['pomaker', 'pochecker', 'director'] },
    { url: "Maker-Repair-List", component: <MakerRepairList />, allowedRoles: ['pomaker', 'pochecker', 'director'] },
    { url: "SuperAdmin-Repair-List", component: <SuperAdminRepairList />, allowedRoles: ['pomaker', 'pochecker', 'director'] },

    { url: "Printable-Repair-List", component: <PrintableReapirOrder />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker', 'director'] },
    { url: "Repair-Order-With-Status", component: <RepairOrderWithStatus />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker', 'director'] },
    { url: "Repair-Partial-Order", component: <RepairPartialOrder />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker', 'director'] },

    { url: "Reapir-Full-Recived-Order", component: <ReapirFullRecivedOrder />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker', 'director'] },



    //repair orders

    { url: "Repair-Po-Orders", component: <RepairPoOrders />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "Repair-Local-Orders", component: <RepairLocalOrders />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },

    // Orders 

    { url: "orders", component: <Orders />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "Local-Order", component: <LocalOrders />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "Open-Mrvs", component: <OpenMrvs />, allowedRoles: ['superAdmin'] },
    { url: "DieselOrders", component: <DieselOrders />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "PendingOrders", component: <PendingOrder />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "super-admin/approve", component: <DeseleSuperPendingApproval />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },



    //MIV
    { url: "miv-add-item", component: <Mivadd />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "miv-add-items", component: < NewMivadd />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "miv-orders", component: <MivOrders />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },


    { url: "miv-pending-approval", component: <Mivpendingapproval />, allowedRoles: ['admin', 'superAdmin'] },
    { url: "miv-rejected-approval", component: <MivRequestRejected />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },

    //Transfer
    { url: "transfer-add-item", component: <AddTransferItem />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "transfer-pending-approval", component: <PendingTransferApproval />, allowedRoles: ['admin', 'superAdmin'] },
    { url: "transfer-rejected-approval", component: <RejectedTransfer />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "transfer-Order", component: <TransferOrder />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "transfer-request-status", component: <TransferNoStatus />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },
    { url: "transfer-status", component: <TransferStatus />, allowedRoles: ['storeKeeper', 'admin', 'superAdmin'] },

    //Reports
    { url: "Casting-Report", component: <CastingReport />, allowedRoles: ['superAdmin'] },
    { url: "requisitionReport", component: <RequisitionReport />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker'] },
    { url: "RequisitionSummaryReport", component: <RequisitionSummaryReport />, allowedRoles: ['superAdmin'] },
    { url: "useItemReport", component: <UsedItemReport />, allowedRoles: ['superAdmin'] },
    { url: "UsedItemSummaryReport", component: <UsedItemSummaryReport />, allowedRoles: ['superAdmin'] },
    { url: "TransferReport", component: <TransferReport />, allowedRoles: ['superAdmin'] },
    { url: "Director-Report", component: <DirectiveReport />, allowedRoles: ['superAdmin'] },
    { url: "IndigoStock", component: <IndigoStock />, allowedRoles: ['superAdmin'] },
    { url: "FabricationReport", component: <FabricationReport />, allowedRoles: ['superAdmin'] },
    { url: "MachineReport", component: <MachineReport />, allowedRoles: ['superAdmin'] },
    { url: "Po-Report", component: <PoReport />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker'] },
    { url: "Po-Deatils", component: <PoDeatils />, allowedRoles: ['superAdmin', 'pomaker', 'pochecker'] },



    // Vehicle
    { url: "addVehicle", component: <VehicleAdd />, allowedRoles: ['superAdmin'] },
    { url: "VehicleCategory", component: <Vehiclecat />, allowedRoles: ['superAdmin'] },
    { url: "vehicle", component: <Vehicle />, allowedRoles: ['superAdmin'] },
    { url: "storevehicle", component: <StoreVehicle />, allowedRoles: ['superAdmin'] },
    { url: "MachineDeatilsWithDriver", component: <MachineDeatilsWithDriver />, allowedRoles: ['superAdmin'] },

    // new vechile url 
    { url: "AssetVehicleList", component: <AssetVehicleList />, allowedRoles: ['superAdmin'] },




    // Driver 

    { url: "checkinout", component: <CheckInOut />, allowedRoles: ['superAdmin', 'MachineOperator'] },

    { url: "storeDriverAttendace", component: <StoreDriver />, allowedRoles: ['superAdmin'] },

    //Digital Form


    { url: "DigitalForm", component: <DigitalForm />, allowedRoles: ['superAdmin', 'storeKeeper'] },
    { url: "rejectionapproval", component: <RejectionApproval />, allowedRoles: ['superAdmin', 'storeKeeper'] },
    { url: "Machine-Log-Sheet", component: <MachineLogSheet />, allowedRoles: ['superAdmin'] },


    //casting
    { url: "Casting", component: <Casting />, allowedRoles: ['superAdmin'] },
    { url: "Casting-Digital-Form", component: <CastingDigitalForm />, allowedRoles: ['superAdmin'] },
    { url: "RequsitionIamges", component: <RequsitionIamges />, allowedRoles: ['superAdmin'] },
    { url: "RequsitionDownlaod", component: <RequsitionDownlaod />, allowedRoles: ['superAdmin'] },

    //WaterDeatils
    { url: "Add-Water-Used-Items", component: <AddWaterUsedItems />, allowedRoles: ['storeKeeper'] },

    //PO
    { url: "Add-New-Supplier", component: <AddNewSupplier />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "Suppliers-List", component: <SuppliersList />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "Inactive-Suppliers-List", component: <InactiveSuppliersList />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "Pending-PO-List", component: <PendingPO />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "PO-List", component: <POList />, allowedRoles: ['pomaker'] },
    { url: "PO-RecivedOrder", component: <PORecivedOrder />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker', 'billing', 'accounts'] },
    { url: "Partial-RecivedOrder", component: <PartialRecivedOrder />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker', 'billing', 'accounts'] },
    { url: "CheckerList", component: <CheckerList />, allowedRoles: ['pochecker'] },
    { url: "SuperAdminList", component: <SuperAdminList />, allowedRoles: ['superAdmin', 'director'] },
    { url: "PoStatus", component: <PoStatus />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "Printable-Purchase-Order", component: <PrintablePo />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "Pending-Billing-Requests", component: <POForBilling />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker'] },
    { url: "PO-Billing-Pending", component: <POPendingForBilling />, allowedRoles: ['superAdmin', 'pochecker', 'pomaker', 'billing', 'accounts'] },

    // quatation

    { url: "Quotation-List", component: <QuatationApproval />, allowedRoles: ['superAdmin'] },


    //supplier Rate



    { url: "Supplier-Rate-List", component: <SupplierRateList />, allowedRoles: ['superAdmin'] },




    /// Chart
    { url: "chart-sparkline", component: <SparklineChart /> },
    { url: "chart-chartjs", component: <ChartJs /> },
    { url: "chart-apexchart", component: <ApexChart /> },
    { url: "chart-rechart", component: <RechartJs /> },





    ///Redux
    { url: "todo", component: <Todo /> },


    /// pages
    { url: "page-error-400", component: <Error400 /> },
    { url: "page-error-403", component: <Error403 /> },
    { url: "page-error-404", component: <Error404 />, allowedRoles: ['storeKeeper', 'admin'] },
    { url: "page-error-500", component: <Error500 /> },
    { url: "page-error-503", component: <Error503 /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/page-lock-screen" element={<LockScreen />} />
        <Route path="/page-error-400" element={<Error400 />} />
        <Route path="/page-error-403" element={<Error403 />} />
        <Route path="/page-error-404" element={<Error404 />} />
        <Route path="/page-error-500" element={<Error500 />} />
        <Route path="/page-error-503" element={<Error503 />} />
        <Route element={<MainLayout />}>
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={data.url}
              element={
                <ProtectedRoute allowedRoles={data.allowedRoles}>
                  {data.component}
                </ProtectedRoute>
              }
            />
          ))}
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { sidebariconHover } = useContext(ThemeContext);
  const sideMenu = useSelector((state) => state.sideMenu);
  return (
    <>
      <div
        id="main-wrapper"
        className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${sideMenu ? "menu-toggle" : ""
          }`}
      >
        <Nav />
        <div
          className="content-body"
          style={{ minHeight: window.screen.height - 60 }}
        >
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Markup;
