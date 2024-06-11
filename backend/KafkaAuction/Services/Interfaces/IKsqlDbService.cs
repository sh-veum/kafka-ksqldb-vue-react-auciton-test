using ksqlDB.RestApi.Client.KSql.RestApi.Responses.Streams;
using ksqlDB.RestApi.Client.KSql.RestApi.Responses.Tables;

namespace KafkaAuction.Services.Interfaces;

public interface IKsqlDbService
{
    Task<string?> DropSingleTablesAsync(string tableName);
    Task<string?> DropSingleStreamAsync(string streamName);
    Task<bool> CreateSingleTableAsync<T>(string tableName, CancellationToken cancellationToken = default);
    Task<TablesResponse[]> CheckTablesAsync();
    Task<StreamsResponse[]> CheckStreamsAsync();
}