using System.Net.WebSockets;

namespace KafkaAuction.Services.Interfaces.WebSocketService;

public interface IAuctionWebSocketService
{
    Task SubscribeToAuctionBidUpdatesAsync(WebSocket webSocket, string auctionId);
    Task SubscribeToAuctionOverviewUpdatesAsync(WebSocket webSocket);
    Task SubscribeToAllRecentBidsAsync(WebSocket webSocket);
}