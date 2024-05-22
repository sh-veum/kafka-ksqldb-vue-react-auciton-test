using ksqlDB.RestApi.Client.KSql.Query;
using ksqlDB.RestApi.Client.KSql.RestApi.Statements.Annotations;

namespace KafkaAuction.Models;

public class Auction_Bid : Record
{
    [Key]
    public int Auction_Id { get; set; }
    public required string Username { get; set; }
    public decimal Bid_Amount { get; set; }
    public required DateTime Bid_Time { get; set; }
}