namespace KafkaAuction.Dtos;

public record UserLocationDto
{
    public string? User_Location_Id { get; set; }
    public required string User_Id { get; set; }
    public required string[] Pages { get; set; }
}
