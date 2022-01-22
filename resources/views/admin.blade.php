@extends('layouts.main')

@section('content')
<div id="app" style="width:100%; height:100%"></div>
@endsection

@section('script')
<script src="{{ asset(mix('js/admin.js')) }}"></script>
@endsection
