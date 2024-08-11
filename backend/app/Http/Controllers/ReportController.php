<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    // Funnel Sales
    public function salesFunnel()
    {
        $salesData = Sale::select(DB::raw('status, COUNT(*) as total'))
            ->groupBy('status')
            ->get();

        return response()->json($salesData, 200);
    }

    // Customer Lifetime Value (CLV)
    public function customerLifetimeValue()
    {
        $clv = DB::table('sales')
            ->select(DB::raw('contact_id, SUM(amount) as lifetime_value'))
            ->groupBy('contact_id')
            ->get();

        return response()->json($clv, 200);
    }

    // Customer Segmentation
    public function customerSegmentation()
    {
        $segmentation = DB::table('contacts')
            ->leftJoin('sales', 'contacts.id', '=', 'sales.contact_id')
            ->select(DB::raw('contacts.company, COUNT(sales.id) as sales_count'))
            ->groupBy('contacts.company')
            ->get();

        return response()->json($segmentation, 200);
    }
}
