import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'apps',children:[
    {
      path: 'ecommerce/addproducts',
      loadComponent: () =>
        import('./ecommerce/addproducts/addproducts.component').then((m) => m.AddproductsComponent),
    },
    {
      path: 'ecommerce/cart',
      loadComponent: () =>
        import('./ecommerce/cart/cart.component').then((m) => m.CartComponent),
    },
    {
      path: 'ecommerce/checkout',
      loadComponent: () =>
        import('./ecommerce/checkout/checkout.component').then((m) => m.CheckoutComponent),
    },
    {
      path: 'ecommerce/editproducts',
      loadComponent: () =>
        import('./ecommerce/editproducts/editproducts.component').then((m) => m.EditproductsComponent),
    },
  {
      path: 'ecommerce/order-details',
      loadComponent: () =>
        import('./ecommerce/order-details/order-details.component').then((m) => m.OrderDetailsComponent),
    },
    {
      path: 'ecommerce/orders',
      loadComponent: () =>
        import('./ecommerce/orders/orders.component').then((m) => m.OrdersComponent),
    },
    {
      path: 'ecommerce/products',
      loadComponent: () =>
        import('./ecommerce/products/products.component').then((m) => m.ProductsComponent),
    },
    {
      path: 'ecommerce/productdetails',
      loadComponent: () =>
        import('./ecommerce/productdetails/productdetails.component').then((m) => m.ProductdetailsComponent),
    },
    {
      path: 'ecommerce/productslist',
      loadComponent: () =>
        import('./ecommerce/productslist/productslist.component').then((m) => m.ProductslistComponent),
    },
    {
      path: 'ecommerce/wishlist',
      loadComponent: () =>
        import('./ecommerce/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    },
    {
      path: 'full-calender',
      loadComponent: () =>
        import('./full-calender/full-calender.component').then(
          (m) => m.FullCalenderComponent
        ),
    },
    {
      path: 'gallery',
      loadComponent: () =>
        import('./gallery/gallery.component').then((m) => m.GalleryComponent),
    },
    {
      path: 'sweet-alerts',
      loadComponent: () =>
        import('./sweet-alerts/sweet-alerts.component').then(
          (m) => m.SweetAlertsComponent
        ),
    },
    {
      path: 'projects/projects-list',
      loadComponent: () =>
        import('./projects/projects-list/projects-list.component').then(
          (m) => m.ProjectsListComponent
        ),
    },
    {
      path: 'projects/project-overview',
      loadComponent: () =>
        import('./projects/project-overviwe/project-overviwe.component').then(
          (m) => m.ProjectOverviweComponent
        ),
    },
    {
      path: 'projects/create-project',
      loadComponent: () =>
        import('./projects/create-project/create-project.component').then(
          (m) => m.CreateProjectComponent
        ),
    },
  
    {
      path: 'task/kanban-board',
      loadComponent: () =>
        import('./task/kanban-board/kanban-board.component').then(
          (m) => m.KanbanBoardComponent
        ),
    },
    {
      path: 'task/list-view',
      loadComponent: () =>
        import('./task/list-view/list-view.component').then(
          (m) => m.ListViewComponent
        ),
    },
    {
      path: 'task/task-details',
      loadComponent: () =>
        import('./task/task-details/task-details.component').then(
          (m) => m.TaskDetailsComponent
        ),
    },
    {
      path: 'jobs/job-details',
      loadComponent: () =>
        import('./jobs/job-details/job-details.component').then(
          (m) => m.JobDetailsComponent
        ),
    },
    {
      path: 'jobs/search-company',
      loadComponent: () =>
        import('./jobs/search-company/search-company.component').then(
          (m) => m.SearchCompanyComponent
        ),
    },
    {
      path: 'jobs/search-jobs',
      loadComponent: () =>
        import('./jobs/search-jobs/search-jobs.component').then(
          (m) => m.SearchJobsComponent
        ),
    },
    {
      path: 'jobs/job-post',
      loadComponent: () =>
        import('./jobs/job-post/job-post.component').then(
          (m) => m.JobPostComponent
        ),
    },
    {
      path: 'jobs/jobs-list',
      loadComponent: () =>
        import('./jobs/jobs-list/jobs-list.component').then(
          (m) => m.JobsListComponent
        ),
    },
  
    {
      path: 'jobs/jobs-list',
      loadComponent: () =>
        import('./jobs/jobs-list/jobs-list.component').then(
          (m) => m.JobsListComponent
        ),
    },
    {
      path: 'jobs/search-candidates',
      loadComponent: () =>
        import('./jobs/search-candidates/search-candidates.component').then(
          (m) => m.SearchCandidatesComponent
        ),
    },
    {
      path: 'jobs/candidate-details',
      loadComponent: () =>
        import('./jobs/candidate-details/candidate-details.component').then(
          (m) => m.CandidateDetailsComponent
        ),
    },
    {
      path: 'nft/market-place',
      loadComponent: () =>
        import('./nft/market-place/market-place.component').then(
          (m) => m.MarketPlaceComponent
        ),
    },
    {
      path: 'nft/nft-details',
      loadComponent: () =>
        import('./nft/nft-details/nft-details.component').then(
          (m) => m.NftDetailsComponent
        ),
    },
    {
      path: 'nft/create-nft',
      loadComponent: () =>
        import('./nft/create-nft/create-nft.component').then(
          (m) => m.CreateNftComponent
        ),
    },
    {
      path: 'nft/wallet-integration',
      loadComponent: () =>
        import('./nft/wallet-integration/wallet-integration.component').then(
          (m) => m.WalletIntegrationComponent
        ),
    },
    {
      path: 'nft/live-auction',
      loadComponent: () =>
        import('./nft/live-auction/live-auction.component').then(
          (m) => m.LiveAuctionComponent
        ),
    },
  
    {
      path: 'crm/companies',
      loadComponent: () =>
        import('./crm/companies/companies.component').then(
          (m) => m.CompaniesComponent
        ),
    },
    {
      path: 'crm/contacts',
      loadComponent: () =>
        import('./crm/contacts/contacts.component').then(
          (m) => m.ContactsComponent
        ),
    },
    {
      path: 'crm/deals',
      loadComponent: () =>
        import('./crm/deals/deals.component').then((m) => m.DealsComponent),
    },
    {
      path: 'crm/leads',
      loadComponent: () =>
        import('./crm/leads/leads.component').then((m) => m.LeadsComponent),
    },
    {
      path: 'crypto/buy-sell',
      loadComponent: () =>
        import('./crypto/buy-sell/buy-sell.component').then(
          (m) => m.BuySellComponent
        ),
    },
    {
      path: 'crypto/currency-exchange',
      loadComponent: () =>
        import('./crypto/currency-exchange/currency-exchange.component').then(
          (m) => m.CurrencyExchangeComponent
        ),
    },
    {
      path: 'crypto/marketcap',
      loadComponent: () =>
        import('./crypto/marketcap/marketcap.component').then(
          (m) => m.MarketcapComponent
        ),
    },
    {
      path: 'crypto/transactions',
      loadComponent: () =>
        import('./crypto/transactions/transactions.component').then(
          (m) => m.TransactionsComponent
        ),
    },
    {
      path: 'crypto/wallet',
      loadComponent: () =>
        import('./crypto/wallet/wallet.component').then((m) => m.WalletComponent),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}