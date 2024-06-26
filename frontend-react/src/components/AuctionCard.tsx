// AuctionCard.tsx
import { Auction } from "@/models/Auction";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { differenceInHours, differenceInMinutes, parseISO } from "date-fns";
import { formatCurrency } from "@/utils/currencyFormatter";

export default function AuctionCard(auctionProps: Auction) {
  const endDate = parseISO(auctionProps.End_Date);
  const now = new Date();
  const hoursLeft = differenceInHours(endDate, now);
  const minutesLeft = differenceInMinutes(endDate, now) % 60;

  const displayWinner = !auctionProps.Is_Open;

  return (
    <>
      <Link to={`/auction/${auctionProps.Auction_Id}`}>
        <Card className="p-1 transition-colors hover:bg-accent hover:text-accent-foreground max-w-64 h-full">
          <CardHeader className="mb-[-16px]">
            <CardTitle className="text-xl">{auctionProps.Title}</CardTitle>
            <CardDescription className="whitespace-normal">
              {displayWinner ? (
                <>
                  Winner:{" "}
                  <strong className="text-primary">
                    {auctionProps.Winner}
                  </strong>
                </>
              ) : (
                <>
                  Time Left: {hoursLeft} hours and {minutesLeft} minutes
                </>
              )}
              <p></p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 hover:break-words overflow-clip">
              {auctionProps.Description}
            </p>
            {auctionProps.Number_Of_Bids === 0 ? (
              <p>
                Starting Price: {formatCurrency(auctionProps.Current_Price)}
              </p>
            ) : (
              <p>Current Price: {formatCurrency(auctionProps.Current_Price)}</p>
            )}
            <p className="ml-4">
              <i>{auctionProps.Number_Of_Bids} bids</i>
            </p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
