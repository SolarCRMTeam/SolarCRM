using System;
using System.Collections.Generic;

namespace API.Framework.Sieve
{
    public class PagedResult<T>
    {
        public IEnumerable<T> Results { get; set; }
        public int RowCount { get; set; }
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPagesNumber => (int)Math.Ceiling(RowCount / (PageSize != 0 ? (decimal)PageSize : 1));
        public bool HasPreviousPage => CurrentPage > 1;
        public bool HasNextPage => CurrentPage < TotalPagesNumber;
        public int FirstRowOnPage
        {
            get { return (CurrentPage - 1) * PageSize + 1; }
        }

        public int LastRowOnPage
        {
            get { return Math.Min(CurrentPage * PageSize, RowCount); }
        }

        public PagedResult()
        {
            Results = new List<T>();
        }
    }
}
