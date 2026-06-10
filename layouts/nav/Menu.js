export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-025-dashboard"></i>,
        roles: ['superAdmin', 'admin', 'storeKeeper', 'pomaker', 'pochecker', 'billing', 'accounts', 'director'],
        content: [
            {
                title: 'Dashboard Light',
                to: 'dashboard',
                roles: ['superAdmin', 'admin', 'storeKeeper', 'pomaker', 'pochecker', 'billing', 'accounts', 'director']
            },

        ],
    },
    //Univeral Search 
    {
        title: "Univeral Search",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-search"></i>,
        roles: ['superAdmin', 'director'],
        content: [
            {
                title: 'Search',
                to: "/Universal-Search",

                roles: ['superAdmin', 'director']

            },



        ],
    },
    //Users
    {
        title: "User",
        classsChange: "mm-collapse",
        //update:"New",
        iconStyle: <i className="fas fa-user"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: "Users",
                to: "/user",
                roles: ['superAdmin']
            },
            {
                title: "Inactive Users",
                to: "/user-list",

                roles: ['superAdmin']
            },
            {
                title: "Add New User",
                to: "/user-add",

                roles: ['superAdmin']
            },
        ],
    },

    //Location Management
    {
        title: "Location",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-geo-alt-fill"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: 'Location',
                to: '/location',

                roles: ['superAdmin']

            },
            {
                title: 'Inactive Location',
                to: '/location-inactive',

                roles: ['superAdmin']
            },
            {
                title: 'Add Location',
                to: '/location-add',

                roles: ['superAdmin']
            },

        ],
    },

    //Machine Management

    {
        title: "Machine Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: (
            <>
                <i className="fa fa-registered" aria-hidden="true"></i>
            </>
        ),
        roles: ['superAdmin'],
        content: [

            {
                title: 'Machine Deatils With Driver',
                to: '/MachineDeatilsWithDriver',

                roles: ['superAdmin']
            },
            {
                title: 'Add Machine',
                to: '/addVehicle',

                roles: ['superAdmin']
            },
            {
                title: 'Edit Machine',
                to: '/vehicle',

                roles: ['superAdmin']

            },
            {
                title: 'Machine Category',
                to: '/VehicleCategory',

                roles: ['superAdmin']

            },
            {
                title: 'Assign Driver',
                to: '/storevehicle',

                roles: ['superAdmin']

            },
            //new url 
            {
                title: 'Asset Vehicle List',
                to: 'AssetVehicleList',

                roles: ['superAdmin']

            },



        ],
    },

    //machine checkin and out

    {
        title: "Vechile In - Out",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-bag-plus"></i>,
        roles: ['MachineOperator'],
        content: [
            {
                title: 'In - Out',
                to: 'checkinout',
                roles: ['MachineOperator']
            },
            


        ],
    },

    //Master List

    {
        title: "Master List",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="far fa-newspaper" aria-hidden="true"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: 'Master List',
                to: '/master-list',

                roles: ['superAdmin']
            },
            {
                title: 'Master Add',
                to: '/master-add',
                roles: ['superAdmin']
            },
            {
                title: 'Master Bulk',
                to: '/master-bulk',
                roles: ['superAdmin']
            },
            {
                title: 'Master Category',
                to: '/master-cat',
                roles: ['superAdmin']
            },
            {
                title: 'Master Sub Category',
                to: '/master-Sub-Cat',
                roles: ['superAdmin']
            },


            {
                title: 'Master Unit',
                to: '/master-unit',
                roles: ['superAdmin']
            },


        ],
    },

    //Unit Conversion 

    {
        title: "Unit Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fas fa-sitemap"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: 'Unit Conversion List',
                to: 'Unit-Conversion',

                roles: ['superAdmin', 'storeKeeper']
            },

        ],
    },

    //Unit Conversion 

    {
        title: "Approval Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-check2-square"></i>,
        roles: ['director','billing', 'pochecker'],
        content: [
            {
                title: 'Requisition',
                to: '/Requisition-Pending-By-Boss',
                roles: ['director']
            },
            {
                title: 'PO',
                to: 'SuperAdminList',
                roles: ['director']
            },
            {
                title: 'Repair Order Approval',
                to: 'SuperAdmin-Repair-List',
                roles: ['director']
            },
            {
                title: 'Bill Approval',
                to: 'Bills-Approval',
                roles: ['billing']
            },
            {
                title: 'Bills',
                to: 'Director-Module',
                roles: ['director']
            },
            {
                title: 'Bills',
                to: 'Po-Approval-Module',
                roles: ['pomaker', 'pochecker']
            },


        ],
    },

    //Asset 

    {
        title: "Asset Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fa fa-boxes"></i>,
        roles: ['superAdmin', 'admin', 'storeKeeper'],
        content: [
            {
                title: 'Asset List',
                to: 'asset-list',

                roles: ['superAdmin', 'storeKeeper']
            },
            {
                title: 'Add Asset',
                to: 'asset-add',
                roles: ['superAdmin']
            },
            {
                title: 'Asset Transfer',
                to: 'Assest-Transfer',
                roles: ['superAdmin1', 'storeKeeper1']
            },


            {
                title: 'Assign Accessories',
                to: 'Accessories-add',
                roles: ['superAdmin1', 'storeKeeper1']
            },
            {
                title: 'Accessories List',
                to: '/Accessories-List',
                roles: ['superAdmin1', 'storeKeeper1']
            },

        ],
    },

    //inventory

    {
        title: "Inventory",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-card-checklist"></i>,
        roles: ['superAdmin', 'admin', 'storeKeeper'],
        content: [
            {
                title: 'Add Inventory',
                to: 'master-list-inv',
                roles: ['superAdmin', 'admin', 'storeKeeper']
            },

            {
                title: 'Inventory List',
                to: 'inventory-list',
                roles: ['superAdmin', 'admin', 'storeKeeper']
            },
            {
                title: 'Critical Inventory',
                to: 'inventory-critical-list',
                roles: ['superAdmin', 'admin', 'storeKeeper']
            },



        ],
    },

    //Requisition

    {
        title: "Requisition Voucher",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-hdd-rack"></i>,
        roles: ['superAdmin', 'admin', 'storeKeeper'],
        content: [
            //{
            // title: 'Requiition Item Add',
            //to: '/requisition-Item-Add',
            //roles: ['storeKeeper']
            // },
            {
                title: 'New Requiition Item Add',
                to: '/new-requisition-Item-Add',
                roles: ['storeKeeper']
            },
            {
                title: 'Admin Approvals',
                to: '/requsition-admin-approval',
                roles: ['superAdmin'], // restrict this to only superAdmin and admin    
            },

            {
                title: 'Revised-Requesition',
                to: '/Revised-Requesition',
                roles: ['superAdmin'], // restrict this to only superAdmin and admin    
            },

            {
                title: 'Manager Approvals',
                to: 'requsition-pending',
                roles: ['admin'], // restrict this to only superAdmin and admin

            },
            {
                title: 'Requesition Status',
                to: '/Requestion-Status',

                roles: ['superAdmin', 'admin', 'storeKeeper']
            },

            {
                title: 'Rejected',
                to: '/requsition-rejected',

                roles: ['superAdmin', 'admin', 'storeKeeper']
            },
            {
                title: 'Moved To Tranfer',
                to: '/Move-To-Transfer',
                roles: ['superAdmin', 'admin', 'storeKeeper']
            },


        ],
    },
    //receievd orders

    {
        title: "Orders",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-cart-plus"></i>,
        roles: ['storeKeeper', 'superAdmin'],
        content: [
            {
                title: 'PO Orders',
                to: '/orders',

                roles: ['storeKeeper']
            },
            {
                title: 'Local Orders',
                to: '/Local-Order',

                roles: ['storeKeeper']
            },

            {
                title: 'Open Mrvs',
                to: '/Open-Mrvs',

                roles: ['superAdmin']
            },
            {
                title: 'Orders Status',
                to: '/PendingOrders',

                roles: ['storeKeeper']
            },



        ],
    },


    // supplier

    {
        title: "Suppliers Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-card-list"></i>,
        roles: ['pochecker', 'pomaker', 'superAdmin'],
        content: [
            {
                title: 'Add New',
                to: '/Add-New-Supplier',
                roles: ['pochecker', 'pomaker', 'superAdmin']
            },
            {
                title: 'Active List',
                to: '/Suppliers-List',
                roles: ['pochecker', 'pomaker', 'superAdmin']
            },
            {
                title: 'Inactive List',
                to: '/Inactive-Suppliers-List',
                roles: ['pochecker', 'pomaker', 'superAdmin']
            },
        ],
    },

    //po management
    {
        title: "PO Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fas fa-file-alt"></i>,
        roles: ['pomaker', 'superAdmin', 'pochecker', 'billing'],
        content: [
            {
                title: 'Pending List',
                to: '/Pending-PO-List',
                roles: ['poAdmin', 'pomaker', 'superAdmin']
            },
            {
                title: 'Maker Approval',
                to: 'PO-List',
                roles: ['pomaker']
            },
            {
                title: 'Checker Approval',
                to: '/CheckerList',
                roles: ['pochecker']
            },

            {
                title: 'PO Status',
                to: 'PoStatus',
                roles: ['pochecker', 'pomaker', 'superAdmin']
            },
            {
                title: 'Printable PO',
                to: 'Printable-Purchase-Order',
                roles: ['pochecker', 'pomaker', 'superAdmin']
            },
            {
                title: 'Partial-Recived-Order',
                to: '/Partial-RecivedOrder',
                roles: ['pochecker', 'pomaker', 'superAdmin', 'billing']
            },


            {
                title: 'Recived-Order',
                to: 'PO-RecivedOrder',
                roles: ['pochecker', 'pomaker', 'superAdmin', 'billing']
            },


            {
                title: 'Billing-Pending',
                to: 'PO-Billing-Pending',
                roles: ['billing1']
            },



            {
                title: 'Billing-Approval',
                to: 'Pending-Billing-Requests',
                roles: ['superAdmin']
            },








        ],
    },

    //  Quatation-Approval


    {/*
        title: "Quotation Management",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fas fa-file-alt"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: 'Pending List',
                to: '/Quotation-List',
                roles: ['superAdmin']
            },

            {
                title: 'Supplier Rate',
                to: 'Supplier-Rate-List',
                roles: ['superAdmin']
            },

        ]
    */},


    {
        title: "Issue Voucher",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-cart-dash"></i>,
        roles: ['admin', 'storeKeeper', 'superAdmin'],
        content: [
            //{
            // title: 'MIV Item Add',
            // to: '/miv-add-item',
            //roles: ['storeKeeper']
            //},
            {
                title: 'New MIV Item Add',
                to: '/miv-add-items',
                roles: ['storeKeeper']
            },
            {
                title: 'Pending Approval',
                to: '/miv-pending-approval',
                roles: ['admin']
            },
            {
                title: 'MIV Orders Status',
                to: '/miv-orders',
                roles: ['admin', 'storeKeeper', 'superAdmin']
            },


            {
                title: 'Rejected Request',
                to: '/miv-rejected-approval',
                roles: ['admin', 'storeKeeper']
            },

        ],
    },
    {
        title: "Water Issue Voucher",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-cart-dash"></i>,
        roles: ['admin', 'storeKeeper'],
        content: [
            {
                title: 'MIV Item Add',
                to: '/Add-Water-Used-Items',
                roles: ['storeKeeper']
            },
            {
                title: 'Pending Approval',
                to: '/miv-pending-approval',
                roles: ['admin',]
            },
            {
                title: 'Rejected Request',
                to: '/miv-rejected-approval',
                roles: ['admin', 'storeKeeper']
            },

        ],
    },

    {
        title: "Transfer",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-truck"></i>,
        roles: ['superAdmin', 'admin', 'storeKeeper'],
        content: [
            {
                title: 'Transfer Item Add',
                to: '/transfer-add-item',
                roles: ['storeKeeper']
            },
            {
                title: 'Pending Approval',
                to: '/transfer-pending-approval',
                roles: ['admin']
            },
            {
                title: 'Transfer Status',
                to: '/transfer-request-status',

                roles: ['superAdmin', 'admin', 'storeKeeper']
            },
            {
                title: 'Rejected Transfer',
                to: '/transfer-rejected-approval',
                roles: ['admin', 'storeKeeper']
            },

        ],
    },

    {
        title: "Transfer Order",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-bag-plus"></i>,
        roles: ['storeKeeper', 'admin', 'superAdmin'],
        content: [
            {
                title: 'Transfer Order',
                to: 'transfer-Order',
                roles: ['storeKeeper']
            },
            {
                title: 'Orders Status',
                to: 'transfer-status',
                roles: ['storeKeeper', 'admin', 'superAdmin']
            },


        ],
    },

    {
        title: "Digital-Form",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fas fa-file-pdf"></i>,
        roles: ['superAdmin', 'storeKeeper'],
        content: [
            {
                title: 'Digital-Form',
                to: 'DigitalForm',
                roles: ['superAdmin', 'storeKeeper']
            },
            {
                title: 'Casting-Form',
                to: 'Casting-Digital-Form',
                roles: ['superAdmin']
            },
            {
                title: 'Machine Log Sheet',
                to: 'Machine-Log-Sheet',
                roles: ['superAdmin', 'storeKeeper']
            },





        ],
    },
    {
        title: "Fabrication",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-bag-plus"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: 'Fabrication Request',
                to: 'Fabrication',
                roles: ['superAdmin']
            },
            {
                title: 'Fabrication Order',
                to: 'FabricationOrder',
                roles: ['superAdmin']
            }

        ],
    },

    {
        title: "Reports",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fa-regular fa-file"></i>,
        roles: ['superAdmin', 'pomaker', 'pochecker'],
        content: [
            {
                title: 'Requisition Items',
                to: 'requisitionReport',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },
            {
                title: 'Casting Report',
                to: 'Casting-Report',
                roles: ['superAdmin']
            },
            {
                title: 'PO Report',
                to: 'Po-Report',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },

            {
                title: 'PO Deatils',
                to: 'Po-Deatils',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },



            {
                title: 'Requisition Summary',
                to: 'RequisitionSummaryReport',
                roles: ['superAdmin']
            },
            {
                title: 'MIV Items',
                to: 'useItemReport',
                roles: ['superAdmin']
            },
            {
                title: 'MIV Summary',
                to: 'UsedItemSummaryReport',
                roles: ['superAdmin']
            },
            {
                title: 'Transfer Items',
                to: 'TransferReport',
                roles: ['superAdmin']
            },
            {
                title: 'Directors',
                to: 'Director-Report',
                roles: ['superAdmin']
            },
            {
                title: 'Indigo Stock',
                to: 'IndigoStock',
                roles: ['superAdmin']
            },
            {
                title: 'Fabrication Report',
                to: 'FabricationReport',
                roles: ['superAdmin']
            },
            {
                title: 'Machine Report',
                to: 'MachineReport',
                roles: ['superAdmin']
            },

        ],
    },

    {
        title: "Request Modification",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="fas fa-edit"></i>,
        roles: ['superAdmin'],
        content: [
            {
                title: 'Requisition Items',
                to: 'rejectionapproval',
                roles: ['superAdmin']
            },


        ],
    },
    {
        title: "Casting",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-arrow-counterclockwise"></i>,
        roles: ['superAdmin122'],
        content: [
            {
                title: 'Casting Error',
                to: 'Casting',
                roles: ['superAdmin111']
            },


        ],
    },

    {
        title: "Repair Module",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-tools"></i>,
        roles: ['superAdmin', 'pomaker', 'pochecker', 'storeKeeper', 'admin'],
        content: [
            {
                title: 'New Request',
                to: 'New-Repair-Request',
                roles: ['storeKeeper']
            },

            {
                title: 'Pending Approval Admin',
                to: 'Pending-Approval-Admin',
                roles: ['admin']
            },

            {
                title: 'Request Approval',
                to: 'SuperAdmin-approval',
                roles: ['superAdmin']
            },

            {
                title: 'Pending Repair Order',
                to: 'Po-Pending-List',
                roles: ['pomaker']
            },

            {
                title: 'Checker List',
                to: 'Checker-Repair-List',
                roles: ['pochecker']
            },
            {
                title: 'Maker List',
                to: 'Maker-Repair-List',
                roles: ['pomaker']
            },


            {
                title: 'Printable Order',
                to: 'Printable-Repair-List',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },

            {
                title: 'Orders Status',
                to: 'Repair-Order-With-Status',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },

            {
                title: 'Partial Order',
                to: 'Repair-Partial-Order',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },
            {
                title: 'Full Recived Order',
                to: 'Reapir-Full-Recived-Order',
                roles: ['superAdmin', 'pomaker', 'pochecker']
            },

        ],
    },

    {
        title: "Repair Orders",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-check2-circle"></i>,
        roles: ['storeKeeper', 'superAdmin'],
        content: [
            {
                title: 'PO Orders',
                to: 'Repair-Po-Orders',

                roles: ['storeKeeper']
            },
            {
                title: 'Local Orders',
                to: 'Repair-Local-Orders',

                roles: ['storeKeeper']
            },

            {
                title: 'Open Mrvs',
                to: 'Open-Mrvs',

                roles: ['superAdmin1']
            },
            {
                title: 'Orders Status',
                to: 'PendingOrders',

                roles: ['storeKeeper1']
            },


        ],
    },

    {
        title: "Accounts",
        classsChange: 'mm-collapse',
        //update:"New",
        iconStyle: <i className="bi bi-wallet2"></i>,
        roles: ['accounts', 'pomaker', 'pochecker'],
        content: [
            {
                title: 'Procurement & Billing',
                to: 'Procurement-Accounts',
                roles: ['accounts', 'pomaker', 'pochecker']
            },
            {
                title: 'All Po Payment Details',
                to: 'All-Po-Payment-Details',
                roles: ['accounts', 'pomaker', 'pochecker','director']
            },
            {
                title: 'Partial RecivedOrder',
                to: 'Partial-RecivedOrder',
                roles: ['accounts']
            },
            {
                title: 'Recived Order',
                to: 'PO-RecivedOrder',
                roles: ['accounts']
            },



        ],
    },
]