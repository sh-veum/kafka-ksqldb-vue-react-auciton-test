/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as AuctionIndexImport } from './routes/auction/index'
import { Route as AuctionAuctionIdImport } from './routes/auction/$auctionId'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuctionIndexRoute = AuctionIndexImport.update({
  path: '/auction/',
  getParentRoute: () => rootRoute,
} as any)

const AuctionAuctionIdRoute = AuctionAuctionIdImport.update({
  path: '/auction/$auctionId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/auction/$auctionId': {
      id: '/auction/$auctionId'
      path: '/auction/$auctionId'
      fullPath: '/auction/$auctionId'
      preLoaderRoute: typeof AuctionAuctionIdImport
      parentRoute: typeof rootRoute
    }
    '/auction/': {
      id: '/auction/'
      path: '/auction'
      fullPath: '/auction'
      preLoaderRoute: typeof AuctionIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutLazyRoute,
  AuctionAuctionIdRoute,
  AuctionIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/auction/$auctionId",
        "/auction/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/auction/$auctionId": {
      "filePath": "auction/$auctionId.tsx"
    },
    "/auction/": {
      "filePath": "auction/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */