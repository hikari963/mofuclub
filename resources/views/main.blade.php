@extends('layouts.common')

@section('content')
<div id="app" style="width:100%; height:100%"></div>
@endsection

@section('script')
<script src="{{ asset(mix('js/app.js')) }}"></script>
@endsection
